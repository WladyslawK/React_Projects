let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Post 1", likes: 10 },
                {id: 2, text: "Post 2", likes: 15 },
                {id: 3, text: "Post 3", likes: 35 },
            ],
            newPostText: "",
        },
        messages: {
            dialogsData: [
                {id: 1, name: "Dave", url: "https://ocdn.eu/pulscms-transforms/1/UkEk9kuTURBXy83N2I1NjFhMy01N2E2LTQyNDgtYjkwNy0zMWU5Mzg2NDY2NWUuanBlZ5GVAs0DBwDDw4GhMAE",},
                {id: 2, name: "Michal", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0icK9GpxZNnu87gz5sJ0F_uPCG7PVtNzJA&usqp=CAU"},
                {id: 3, name: "Damian", url: "data:image/jpeg;base64,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"},
                {id: 4, name: "Karol", url: "https://ocdn.eu/pulscms-transforms/1/UkEk9kuTURBXy83N2I1NjFhMy01N2E2LTQyNDgtYjkwNy0zMWU5Mzg2NDY2NWUuanBlZ5GVAs0DBwDDw4GhMAE",},
                {id: 5, name: "Maria", url: "https://ocdn.eu/pulscms-transforms/1/UkEk9kuTURBXy83N2I1NjFhMy01N2E2LTQyNDgtYjkwNy0zMWU5Mzg2NDY2NWUuanBlZ5GVAs0DBwDDw4GhMAE",},
                {id: 6, name: "Andrew", url: "https://ocdn.eu/pulscms-transforms/1/UkEk9kuTURBXy83N2I1NjFhMy01N2E2LTQyNDgtYjkwNy0zMWU5Mzg2NDY2NWUuanBlZ5GVAs0DBwDDw4GhMAE",},

            ],
            messages: [
                {id: 1, sender: "other", message: "Hi Helow"},
                {id: 2, sender: "other", message: "How is your progress?"},
                {id: 3, sender: "other", message: "Yo"},
            ],
            newMessageText:"Hello",

        },
        sidebar: {
            friendsImages:[
                {id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0icK9GpxZNnu87gz5sJ0F_uPCG7PVtNzJA&usqp=CAU",},
                {id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0icK9GpxZNnu87gz5sJ0F_uPCG7PVtNzJA&usqp=CAU",},
                {id: 3, url: "https://ocdn.eu/pulscms-transforms/1/1SxktkuTURBXy81ZDI2NzQ4ZC03OGIxLTQ2NDYtOWVmNS1jY2Q3OGQxYzU4ODIuanBlZ5GVAs0DAADCww",},

            ]
        },
    },

    _callSubscriber() {
        console.log("state was changed");
    },

    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){ //action = {type="ADD-POST"}
      if(action.type === "ADD-POST"){
          let newPost = {
              id: 5,
              text: this._state.profilePage.newPostText,
              likes: 0,
          }
          this._state.profilePage.postsData.push(newPost);
          this._state.profilePage.newPostText = "";
          this._callSubscriber(this._state);
          console.log(this._state.profilePage.newPostText)
      }else if(action.type === "UPDATE-NEW-POST-TEXT"){
          this._state.profilePage.newPostText = action.newText;
          this._callSubscriber(this._state);
          console.log("Console.log", this._state.profilePage.newPostText);
      }else if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
          this._state.messages.newMessageText = action.newText;
          this._callSubscriber(this._state);
      }else if(action.type === "SEND-NEW-MESSAGE"){
          let newMessage = {
              id: 3,
              sender: action.sender,
              message: this._state.messages.newMessageText,
          }
          this._state.messages.messages.push(newMessage);
          this._state.messages.newMessageText = "";
          this._callSubscriber(this._state);
      }
    },
}


export default store;