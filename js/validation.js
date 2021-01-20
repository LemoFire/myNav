// JavaScript Document
var Regular = {
	InputEmail1REG: /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/,
	InputPassword1REG: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$).{8,16}$/,
	InputPassword2REG: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$).{8,16}$/,
	InputPhoneREG: /^1[34578]\d{9}$/,
};

function validate(id) {
	"use strict";
	switch (id) {
	case 'InputPassword1':
		if (validate_default(id)) {
			if ($("#InputPassword2").val() !== "") {
				validate_raPassword();
			}
		}

		break;
	case 'InputPassword2':
		if(validate_default(id)){
			validate_raPassword();
		}
		break;
	default:
		validate_default(id);
		break;
	}

}

function validate_default(id) {
	"use strict";
	var vaildate_index = id + "REG";
	var vaild_EXP = Regular[vaildate_index];
	var vaild_str = $('#' + id).val();
	var REG_Command = vaild_EXP.test(vaild_str);
	if (REG_Command) {
		$("#" + id).removeClass('is-invalid');
		$("#" + id).addClass('is-valid');
		return true;
	} else {
		$("#" + id).removeClass('is-valid');
		$("#" + id).addClass('is-invalid');
		return false;
	}

}

function validate_raPassword() {
	"use strict";
	if ($('#InputPassword2').val() === $('#InputPassword1').val()) {
		$('#InputPassword2').removeClass('is-invalid');
		$('#InputPassword2').addClass('is-valid');
		return true;
	} else {
		$('#InputPassword2').removeClass('is-valid');
		$('#InputPassword2').addClass('is-invalid');
		return false;
	}

}