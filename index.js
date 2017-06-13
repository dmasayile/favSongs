const favSongs = {

init: function(selectors) {
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)
    const f = document.querySelector(selectors.formSelector)
    f.addEventListener('submit', this.addSong.bind(this))
},

addSong: function (ev) {
    ev.preventDefault()
    
    const song = {
        id: this.max + 1,
        name: ev.target.songName.value,
    }

    const listItem = this.renderListItem(song)
    this.list.appendChild(listItem)

    ++ this.max

// this.songs.push(song)

    this.max
    ev.target.reset()
},

renderListItem(song) {
    const item = document.createElement('li')
    item.textContent = song.name
    return item

// renderList: function(details) {
//     const list = document.createElement('dl')

//     Object.keys(songName).map(songName, ()); {
//         const li = this.renderList()
//         list.appendChild(li)
        
//     }

//     return list
},

editEntry: function(id) {
    var text = document.getElementById('songName').value;

            if ( document.getElementById('songName').value ){

                var div = document.createElement('div');
                div.className = 'divex';

                var li = document.createElement('li');
                li.setAttribute('id', 'songForm');
                div.appendChild(li);

                var texty = document.createTextNode(text);
                var bigdiv = document.getElementById('addedText');

                var editbutton = document.createElement('BUTTON');
                editbutton.setAttribute('id', 'button_click');
                var buttontext = document.createTextNode('Edit');
                editbutton.appendChild(buttontext);

                var makeAreaEditable = function(){
                            function myFunction(e){
                                var objLi = e.currentTarget;
                                objLi.value = objLi.customProperty;
                                document.getElementByID("button_click").value = "ok";
                            };
                            var textareaEdit = document.createElement('textarea');
                            textareaEdit.customProperty = li.value;
                            textareaEdit.onclick = myFunction;
                            bigdiv.appendChild(li).appendChild(textareaEdit);
                        };
                editbutton.onclick = makeAreaEditable;
                bigdiv.appendChild(li).appendChild(texty);
                bigdiv.appendChild(li).appendChild(editbutton);
                document.getElementById('songName').value = "";
}
},

handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')

    const person = {
        name: f.songName.value,
    }

},

}

favSongs.init({
    formSelector: '.song-form',
    listSelector: '#song-list',
})