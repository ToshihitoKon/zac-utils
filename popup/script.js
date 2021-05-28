btn = document.getElementById("zac_utils_apply")
btn.addEventListener('click', sendForm)

const formNames = [
   // 仕事はじめ
  "time_in_hour",
  "time_in_minute",
   // 仕事おわり
  "time_out_hour",
  "time_out_minute",
  // 休憩時間
  "time_break_input_hour",
  "time_break_input_minute",

  // お仕事内容
  "id_sagyou_naiyou1", // 勤務
  "time_required_hour1", // 勤務時間
  "time_required_minute1",
  "code_project_combo1", // 案件名、code_projectとセット
  "code_project1", // zac番号
]

function buildMessageFromForm() {
  formValueList = []
  formNames.forEach(function(name){
    el = document.getElementById(name)
    if (!el) return
    value = el.value 
    if(!value)return
    formValueList.push({
      formName: name,
      value: value,
    })
  }) 
  return {
    type: "apply",
    applyFormValues: formValueList
  }
}

function sendForm(){
  message = buildMessageFromForm()

  // アクティブなタブにmessageを飛ばす
  chrome.tabs.query(
    {active:true, currentWindow:true},
    function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, message)
    }
  )

}
