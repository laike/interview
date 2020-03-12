//下面是使用jquery实现
let txtTitle = $('#txt-title')
let list = $('#ul-list')
let submit = $('#btn-submit')
submit.click(function() {
    let title = txtTitle.val();
    let li = $(`<li>${title}</li>`)
    list.append(li);
    txtTitle.val('')
})