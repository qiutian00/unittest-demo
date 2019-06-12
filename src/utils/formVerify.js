let formVerify = {
    phone: function (phoneStr, isSuccess) {
        if (isSuccess) {
            if (!(/^1[3-5|7-8][0-9]{9}$/.test(phoneStr)) && !(/^(\d{3}-|\d{4}-)?(\d{8}|\d{7})?$/.test(phoneStr))) {
                // layerMsg.checkFail("请填写正确的手机号(如：13333333333)或者电话号码!(如：0731-84153885)!");
                // obj.addClass("layui-form-danger");
                // obj.focus();
                return false;
            }
            return true;
        }
        return false;
    }
}

export default formVerify;