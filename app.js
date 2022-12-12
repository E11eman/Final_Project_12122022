//        Name:       Luke Elleman
//        Date:       December 12th, 2022
//        Course:     CIS-131-102
//        Assignment: Movie Ticket Purchase (Final Project)

const movies = "https://api.themoviedb.org/3/movie/now_playing?api_key=003ab87f14a8a867a3d4a6b33c3a8356&language=en-US&page=1"; //link for API request

const app = new Vue({
    el:"#app",
    data(){
    return {
        info: [], //empty array to hold API call response
        Acounter: 0, //Adult Ticket Counter
        Chcounter: 0, //Child Ticket Counter
        cartcounter: 0, //Total Ticket Counter


    };
},

    methods: {
        counter () //calculates total
        {
            var adultprice = this.Acounter*6.99 //total Adult Price
            var childprice = this.Chcounter*3.99 //total Child Price

            subtotal = (adultprice + childprice).toFixed(2)
            console.log(subtotal)
            return subtotal;
        },
        showCart() { //reveals cart when icon is clicked
            var hide = document.getElementById('hidetable')
            if (this.cartcounter > 0) //items in cart must be greater than 0
            {
                hide.style.display = "table" //displays table
            }
            else
            {
                hide.style.display = "none" //hides cart
            }
        },
        removeItem(e){
            var buttonClicked = e.target
            buttonClicked.parentElement.parentElement.remove() //removes row from table
        },
        addItem(){ //supposed to grab Item title and display it in cart
                    // but couldn't figure out a way to do it :(
            
            var movietitles = document.getElementsByClassName('card-title')
            console.log(movietitles[0].innerHTML)
            var movieButtons = document.getElementsByClassName('item-add')
            console.log(movieButtons[0].querySelector('.mtitle').innerHTML)

            return movietitles[0].innerHTML
        },
        
    },

    mounted () { //API call
        axios.get(movies)

        .then(response => (this.info = response.data.results))
        console.log(this.info)
    }
})