const dataLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    
    let phones_data = data.data;
    let phones_dataLength = phones_data.length;
    // const id_search = await fetch('https://openapi.programming-hero.com/api/phone/${apple_iphone_13_pro-11102}');
    // const id_data = await id_search.json();
    // console.log(phones_dataLength);
    searchLoad(phones_data,phones_dataLength);
}


const searchLoad = async(phones_data,phones_dataLength) =>{
    const phone_card = document.getElementById('phone_card');
    // Remove Phone Card
    phone_card.innerHTML = "";

    // more Show Bttn Working
    let showMoreBttn = document.getElementById('showMoreBttn');
    // more Show
    showMoreBttn.addEventListener('click',function(){
        phone_card.innerHTML = "";

        phones_data.forEach(phones_data => {
    
            const card_div = document.createElement('div');
            
            card_div.classList = `card w-96 bg-gray-100 shadow-xl`
            card_div.innerHTML = `
                        <figure class="px-10 pt-10">
                        <img src="${phones_data.image}" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold">${phones_data.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                        </div>
            `
            phone_card.appendChild(card_div);
        });
    })

    // Showing Phone Card Into 12 Length
    let sliceData ;
    if(phones_dataLength>12){
        sliceData = phones_data.slice(0,12);
        showMoreBttn.classList = `btn btn-primary -ml-3 block`;


        sliceData.forEach(sliceData => {
        
            const card_div = document.createElement('div');
            
            card_div.classList = `card w-96 bg-gray-100 shadow-xl`
            card_div.innerHTML = `
                        <figure class="px-10 pt-10">
                        <img src="${sliceData.image}" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                        <h2 class="card-title font-bold">${sliceData.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Show Details</button>
                        </div>
                        </div>
            `
            phone_card.appendChild(card_div);
        });

    }
    else{
        showMoreBttn.classList = `btn btn-primary -ml-3 hidden`;


        // const forEach2 = () => {

            phones_data.forEach(phones_data => {
        
                const card_div = document.createElement('div');
                
                card_div.classList = `card w-96 bg-gray-100 shadow-xl`
                card_div.innerHTML = `
                            <figure class="px-10 pt-10">
                            <img src="${phones_data.image}" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold">${phones_data.phone_name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Show Details</button>
                            </div>
                            </div>
                `
                phone_card.appendChild(card_div);
            });
        // }

    } 
}

// For Search Button Handel
const searchForClick = () =>{
    
    let searchField = document.getElementById('searchField')
    let searchText = searchField.value;
    console.log(searchText);
    dataLoad(searchText);
    //Remove Input Fild Text
    // searchField.value = "";
    
}

