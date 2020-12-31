


const renderArticle = (doc) => {
    let ul = document.querySelector('#blog-list');

    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');

    let div = document.createElement('div');
    let del = document.createElement('button');
    let update = document.createElement('button');

    // Deleting data
    del.addEventListener('click', (event) => {
        event.stopPropagation()
        let id = event.target.parentNode.getAttribute('data-id');
        console.log(id);
        db.collection('Articles').doc(id).delete(); 
    })

    //////////////////////////////////
    h4.textContent = doc.data().title;
    p.textContent = doc.data().body;
    li.appendChild(h4);
    li.appendChild(p);
    div.classList.add('buttons');
    del.classList.add('delete');
    update.classList.add('update');
    del.innerHTML = 'Delete';
    update.innerHTML = 'Update';
    div.setAttribute('data-id', doc.id);
    div.appendChild(update);
    div.appendChild(del);

    ul.appendChild(li);
    ul.appendChild(div);
    
    

    

    
}


// // Getting articles on the admin's dashboard
db.collection('Articles').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderArticle(doc);
    });
})


