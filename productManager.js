let arr = [];

function add() {
    let newProduct = document.getElementById('new-product').value;
    arr.push(newProduct);
    alert("Thêm thành công");
    showAll();
    document.getElementById("new-product").value = "";
}

function remove(index) {
    arr.splice(index, 1);
    alert("Xóa thành công");
    showAll();
}

function showFormEdit(index) {
    document.getElementById("add").innerHTML = "";
    document.getElementById("btn-edit").innerHTML = `<button onclick="edit(${index})">Sửa</button>`;
    document.getElementById("new-product").value = arr[index];
}


function edit(index) {
    let product = document.getElementById("new-product").value;
    arr[index] = product;
    alert("Sửa thành công")
    document.getElementById("btn-edit").innerHTML = ` <button onclick="add(${index})">Thêm mới</button> `;
    showAll();
}

function showAll() {
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html += `
            <tr>
                <td>${arr[i]}</td>
                <td><button onclick="showFormEdit(${i})">Sửa</button></td>
                <td><button onclick="remove(${i})">Xoá</button></td>
            </tr>
            `
    }
    document.getElementById('list').innerHTML = html;
}

showAll();

