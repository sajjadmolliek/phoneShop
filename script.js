const dataLoad = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    
    let phones_data = data.data;
    let phones_dataLength = phones_data.length;
    searchLoad(phones_data,phones_dataLength);
}


const searchLoad = async(phones_data,phones_dataLength) =>{
    // Phone Card
    const phone_card = document.getElementById('phone_card');
    phone_card.innerHTML = "";
    // Modal Card
    const modal_card = document.getElementById('modalShowDiv');

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
                        <p class=" font-semibold text-xl text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                        <h1 class=" font-bold text-3xl my-3" >$999</h1>
                        <div class="card-actions">
                        <button onclick="handelShowModalDetails('${phones_data.slug}')" class="btn btn-primary">Show Details</button>                        </div>
                        </div>
            `
            phone_card.appendChild(card_div);
        });
        showMoreBttn.classList = `btn btn-primary -ml-3 hidden`;
        
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
                            <p class=" font-semibold text-xl text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                            <h1 class=" font-bold text-3xl my-3" >$999</h1>
                            <div class="card-actions">
                            <button onclick="handelShowModalDetails('${sliceData.slug}')" class="btn btn-primary">Show Details</button>
                            </div>
                        </div>
            `
            phone_card.appendChild(card_div);

        });
    }
    else{
        showMoreBttn.classList = `btn btn-primary -ml-3 hidden`;

            phones_data.forEach(phones_data => {
                const card_div = document.createElement('div');
                card_div.classList = `card w-96 bg-gray-100 shadow-xl`
                card_div.innerHTML = `
                            <figure class="px-10 pt-10">
                            <img src="${phones_data.image}" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                            <h2 class="card-title font-bold">${phones_data.phone_name}</h2>
                            <p class=" font-semibold text-xl text-gray-600">There are many variations of passages of available, but the majority have suffered</p>
                            <h1 class=" font-bold text-3xl my-3" >$999</h1>
                            <div class="card-actions">
                            <button onclick="handelShowModalDetails('${phones_data.slug}')" class="btn btn-primary">Show Details</button>
                            </div>
                            </div>
                `
                phone_card.appendChild(card_div);
            }); 
    } 
    
}
 handelShowModalDetails = async(id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const idData = data.data;
    showPhoneDetails(idData);
}

const showPhoneDetails = (idData) =>{
    const modal = document.getElementById('modalShowDiv');
    modal.innerHTML = "";
    const modalDetails = document.createElement('div');
    modalDetails.innerHTML = `
                    <div class="flex justify-center bg-gray-400 mb-6 rounded-xl">
                    <img src="${idData.image}" class="rounded-xl bg-gray-400 py-6" />
                    </div>
                    <h3 class="font-bold text-lg">${idData.name}</h3>
                    <p class="my-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p class="my-1"><span class="font-bold">Storage :</span> ${idData.mainFeatures.storage}</p>
                    <p class="my-1"><span class="font-bold">Display Size :</span> ${idData.mainFeatures.displaySize}</p>
                    <p class="my-1"><span class="font-bold">Chipset :</span> ${idData.mainFeatures.chipSet}</p>
                    <p class="my-1"><span class="font-bold">Memory :</span> ${idData.mainFeatures.memory}</p>
                    <p class="my-1"><span class="font-bold">Slug : </span> ${idData.slug}</p>
                    <p class="my-1"><span class="font-bold">Release data :</span> ${idData.releaseDate}</p>
                    <p class="my-1"><span class="font-bold">Brand :</span> ${idData.name}</p>
                    <p class="my-1"><span class="font-bold">GPS :</span> ${idData.others?.GPS? idData.others.GPS:"No GPS Available"}</p>
                    
                    <div class="modal-action"> 
                    <button class="btn btn-primary">Close</button>
                    </div> 
                    
    `
    modal.appendChild(modalDetails);
    my_modal.showModal();
}

// For Search Button Handel
const searchForClick = () =>{
    
    let searchField = document.getElementById('searchField')
    let searchText = searchField.value;
    dataLoad(searchText);
    searchField.value = "";
    
}