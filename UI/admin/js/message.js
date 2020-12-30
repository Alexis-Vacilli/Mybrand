

// Rrender message 

const renderMessage = (doc) => {
    const container = document.getElementById('message-list');
    const bigDiv = document.createElement('div');
    bigDiv.classList.add('message');
    const label1 = document.createElement('label');
    const span1 = document.createElement('span');
    const linebreak = document.createElement('br');
    const label2 = document.createElement('label');
    const span2 = document.createElement('span');
    const linebreak2 = document.createElement('br');
    const div = document.createElement('div');
    div.classList.add('text');
    const date = document.createElement('span');
    date.classList.add('date');

    // Appending child elements to their parent elements 

    container.appendChild(bigDiv);
    bigDiv.appendChild(label1);
    bigDiv.appendChild(span1);
    bigDiv.appendChild(linebreak);
    bigDiv.appendChild(label2);
    bigDiv.appendChild(span2);
    bigDiv.appendChild(linebreak2);
    bigDiv.appendChild(div);
    bigDiv.appendChild(date);
    label1.appendChild(span1);
    label2.appendChild(span2);
    span1.textContent = `From: ${doc.data().name}`;
    span2.textContent = `Email: ${doc.data().email}`;
    // label1.textContent = doc.data().name;
    div.textContent = doc.data().message;
    date.textContent = doc.data().date;
    
    // Adding style 

    span1.style.color = '#fff';
    span1.style.fontSize = '20px';

    span2.style.color = '#fff';
    span2.style.fontSize = '20px';

}



db.collection('Messages').onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(element => {
        if (element.type == 'added') {
            renderMessage(element.doc);
        }
    });
})