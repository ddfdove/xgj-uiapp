<template>
  <view class="write_info_page">
    <div
      class="write_info_nav"
      v-if="menuButtonInfo"
      :style="{
        height: menuButtonInfo.height + 'px',
        top: menuButtonInfo.top + 'px',
      }"
    >
      <image src="../../../static/back.png" mode="" @click="back"></image>
      <span>采购详情</span>
    </div>
    <div class="write_info_content">
      <view class="personForm">
        <view class="flex-row-start formItem">
          <view class="label">部门</view>
          <uni-data-select
            class="select"
            v-model="form.department"
            :localdata="deptOptions"
            placeholder="请选择部门"
            clear
          ></uni-data-select>
          <!-- <uni-icons type="right" size="20"></uni-icons> -->
        </view>
        <view class="flex-row-start formItem">
          <view class="label">负责人</view>
          <uni-data-select
            class="select"
            v-model="form.planManager"
            :localdata="userOptions"
          ></uni-data-select>
        </view>
        <view class="flex-row-start formItem">
          <view class="label">日期</view>
          <uni-datetime-picker
            class="picker"
            type="datetime"
            v-model="form.updateTime"
          />
        </view>
        <view class="flex-row-start formItem">
          <view class="label">食材</view>
          <uni-data-select
            class="select"
            v-model="form.materialId"
            :localdata="materialOptions"
          ></uni-data-select>
          <!-- <input
            class="input"
            type="text"
            v-model="form.materialId"
            placeholder="请选择食材"
          /> -->
        </view>
        <view class="flex-row-start formItem">
          <view class="label">数量</view>
          <input
            class="input"
            type="text"
            v-model="form.quantity"
            placeholder="请输入数量"
          />
        </view>
        <view class="flex-row-start formItem">
          <view class="label">单位</view>
          <input
            class="input"
            type="text"
            v-model="form.unit"
            placeholder="请输入单位"
          />
        </view>
        <view class="flex-row-start formItem">
          <view class="label">备注</view>
          <textarea
            class="textare"
            v-model="form.remark"
            placeholder="请输入备注..."
          ></textarea>
        </view>
      </view>
      <div class="write_info_content_button" @click="suer">
        <span>提交</span>
      </div>
    </div>
  </view>
</template>

<script>
const validateForm = require("@/utils/validation.js");
import { publicMixin } from "@/pages/mixin/mixin.js";
import {
  purchaseInfo,
  purchaseSave,
  purchaseUpdate,
  deptList,
  mxMaterialInfoList,
  userList,
} from "@/api/index.js";
import { util, router } from "@/utils/util.js";
export default {
  mixins: [publicMixin],
  data() {
    return {
      menuButtonInfo: null,
      deptOptions: [],
      userOptions: [],
      materialOptions: [],
      form: {
        department: "",
        materialId: "",
        planManager: "",
        updateTime: "",
        quantity: 0,
        unit: "",
        remark: "",
		purchaseId:"",
        /* createBy: "",
        createTime: "",
        delFlag: "",
        isSelected: true,
        materialName: "",
        params: {},
        planDate: "",
        planManagerName: "",
        purchaseId: 0,
        purchaseNumber: "",
        status: "",
        updateBy: "", */
      },
      queryParam: {
        purchaseId: "",
      },
      rules: [
        {
          name: "department",
          rule: ["required"],
          msg: ["请选择部门"],
        },
        {
          name: "materialId",
          rule: ["required"],
          msg: ["请选择材料"],
        },
        {
          name: "planManager",
          rule: ["required"],
          msg: ["请选择负责人"],
        },
        {
          name: "updateTime",
          rule: ["required"],
          msg: ["请选择日期"],
        },
        {
          name: "quantity",
          rule: ["required"],
          msg: ["请输入数量"],
        },
        {
          name: "unit",
          rule: ["required"],
          msg: ["请输入单位"],
        },
      ],
    };
  },
  onLoad({ id }) {
    this.menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    this.getOptionsData(); //获取所有下拉数据
    if (id) {
      this.queryParam.purchaseId = id;
      this.asyncGetDetail();
    }
  },
  methods: {
    back() {
      uni.navigateBack();
    },
    //所有下拉列表数据
    getOptionsData() {
      Promise.all([deptList(), mxMaterialInfoList(), userList()]).then(
        (res) => {
          console.log("所有下拉数据", res);
          let dp = res[0];
          let mt = res[1];
          let user = res[2];
          this.deptOptions = dp.data.map((item) => ({
            text: item.deptName,
            value: String(item.deptId),
          }));
          this.materialOptions = mt.data.map((item) => ({
            text: item.materialName,
            value: item.materialId,
          }));
          this.userOptions = user.data.map((item) => ({
            text: item.userName,
            value: String(item.userId),
          }));
        }
      );
    },
    suer() {
      let method = this.queryParam.purchaseId ? purchaseUpdate : purchaseSave;
      let checkRes = validateForm.validation(this.form, this.rules);
      if (checkRes) {
        this.$mvc.alert(checkRes, "error");
      } else {
        method(this.form).then((res) => {
          if (res.code == 0) {
            this.$mvc.alert("提交成功!", "success");
            setTimeout(() => {
              this.goToPage("/pages/canteen/purchase/list");
            }, 2000);
          }
        });
      }
    },
    asyncGetDetail() {
      purchaseInfo(this.queryParam).then((res) => {
        if (res.code == 0) {
			this.form =res.data;
         /* let {
            department,
            materialId,
            planManager,
            updateTime,
            quantity,
            unit,
            remark,
          } = res.data;
          this.form = {
            department,
            materialId,
            planManager,
            planManager,
            updateTime,
            quantity,
            unit,
            remark,
          }; */
        }
      });
    },
  },
};
</script>
<style lang="scss">
.write_info_page {
  width: 750rpx;
  height: 100vh;
  background-color: #f5f8fe;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: scroll;

  .write_info_nav {
    position: absolute;
    width: 750rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    image {
      width: 44rpx;
      height: 44rpx;
      position: absolute;
      left: 24rpx;
    }

    span {
      font-size: 32rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #333333;
      line-height: 32rpx;
    }
  }

  .write_info_content {
    margin-top: 155rpx;
    padding-bottom: 50rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 702rpx;

    .personForm {
      border-radius: 30rpx;
      background-color: #ffffff;
      width: 100%;
      box-shadow: 0px -2px 27px 0px rgba(208, 208, 208, 0.25);

      .formItem {
        padding: 30rpx 0rpx;
        border-bottom: 1rpx solid #f2f2f2;
        margin: 0rpx 25rpx;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &:last-child {
          border-bottom: 0rpx;
        }

        .label {
          min-width: 150rpx;
          display: inline-block;
          font-weight: 500;
          font-size: 32rpx;
          color: #333333;
        }

        .input {
          font-size: 32rpx;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          padding: 0 5px;
          padding-left: 10px;
          -webkit-user-select: none;
          user-select: none;
          width: 100%;
          flex: 1;
          height: 80rpx;
        }

        .select {
          width: 100%;
          border: 0;

          .uni-select {
            font-size: 32rpx;
          }
        }

        .uni-date-editor {
          .uniui-calendar:before {
            content: "";
          }

          .uni-date__x-input {
            padding-left: 20rpx;
            font-size: 32rpx !important;
          }
        }
        .textare {
          border: 1px solid #e5e5e5;
          font-size: 32rpx;
          padding: 5px;
          height: 200rpx;
        }
        .input[type="textare"] {
          height: 200rpx;
        }
      }
    }

    .write_info_content_button {
      width: 620rpx;
      height: 84rpx;
      background: #fe5ba4;
      border-radius: 42rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50rpx;

      span {
        font-size: 32rpx;
        font-weight: 400;
        color: #ffffff;
        line-height: 32rpx;
      }
    }
  }
}
</style>