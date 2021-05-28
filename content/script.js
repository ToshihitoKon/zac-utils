listenerFunc = function(request, sender, sendResponse){
  switch (request.type) {

    // payloadsの中身を回してすべて充てる
    case "apply":
      // console.log(request.payload)
      request.applyFormValues.forEach(function(v){
        document.getElementsByName(v.formName).item(0).value = v.value
      })
      break

    default:
      console.log(request.type)
      break
  }
}

chrome.runtime.onMessage.addListener(listenerFunc)
console.log("zac_utils is ready")
