// ADDITIONAL SERVICES
// Pool maintenance products and services
var poolMaintainanceProducts = [
    {
        serviceId: 1,
        service_name: "Complete line of pool chemicals",
    },
    {
        serviceId: 2,
        service_name: "Pool Cleaning",
    },
    {
        serviceId: 3,
        service_name: "Pool closing/winterizing",
    },
    {
        serviceId: 4,
        service_name: "Professional pool leaning service",
    },
    {
        serviceId: 5,
        service_name: "Acid wash",
    },
    {
        serviceId: 6,
        service_name: "Drain and clean pools",
    },
    {
        serviceId: 7,
        service_name: "Repair and equipment upgrades",
    },
    {
        serviceId: 8,
        service_name: "Decking concrete and kool deck",
    },
];

// Accessories and services
var accessoriesAndServices = [
    {
        serviceId: 9,
        service_name: "Pumps and filters",
    },
    {
        serviceId: 10,
        service_name: "Gas Heaters",
    },
    {
        serviceId: 11,
        service_name: "Heat Pumps",
    },
    {
        serviceId: 12,
        service_name: "Backyard accessories",
    },
    {
        serviceId: 13,
        service_name: "Pool renovation and resurfacing",
    },
    {
        serviceId: 14,
        service_name: "Liner Replacement",
    },
    {
        serviceId: 15,
        service_name: "Safety covers and installation",
    },
    {
        serviceId: 16,
        service_name: "Salt Systems",
    },
]

// Repair and cleaning solutions
var repairAndCleaning = [
    {
        serviceId: 17,
        service_name: "Stamped concrete",
    },
    {
        serviceId: 18,
        service_name: "Safety equipment",
    },
    {
        serviceId: 19,
        service_name: "Water testing",
    },
    {
        serviceId: 20,
        service_name: "Lights and Electronics",
    },
    {
        serviceId: 21,
        service_name: "Leak detection and repair",
    },
    {
        serviceId: 22,
        service_name: "Tile and coping",
    },
    {
        serviceId: 23,
        service_name: "Spas",
    },
    {
        serviceId: 24,
        service_name: "Complete service department",
    },
]


// pool-maintainance-products-column
var poolMaintainanceProductsColumn = document.querySelector(".pool-maintainance-products-column");
// accessories-and-services-column
var accessoriesAndServicesColumn = document.querySelector(".accessories-and-services-column");
// repair-and-cleaning-column
var repairAndCleaningColumn = document.querySelector(".repair-and-cleaning-column");

for(var i = 0; i < poolMaintainanceProducts.length; i++){
    var serviceName = poolMaintainanceProducts[i].service_name;
    var serviceId = poolMaintainanceProducts[i].serviceId;
    // console.log(serviceName);
    
    var poolServiceItemHTML = `
        <div class="service-item cursor-pointer" id=${serviceId}>
            <i class="fa-solid fa-arrow-right service-item-icon" style="color: #0E74BE"></i>
            <p class="service-text">${serviceName}</p>
        </div> `;

    poolMaintainanceProductsColumn.innerHTML += poolServiceItemHTML;
}

for(var i = 0; i < accessoriesAndServices.length; i++){
    var serviceName = accessoriesAndServices[i].service_name;
    var serviceId = accessoriesAndServices[i].serviceId;

    // console.log(serviceName);
    
    var accessoryServiceItemHTML = `
        <div class="service-item cursor-pointer" id=${serviceId}>
            <i class="fa-solid fa-arrow-right service-item-icon" style="color: #0E74BE"></i>
            <p class="service-text">${serviceName}</p>
        </div> `;

        accessoriesAndServicesColumn.innerHTML += accessoryServiceItemHTML
}

for(var i = 0; i < repairAndCleaning.length; i++){
    var serviceName = repairAndCleaning[i].service_name;
    var serviceId = repairAndCleaning[i].serviceId;
    
    // console.log(serviceName);
    
    var repairServiceItemHTML = `
        <div class="service-item cursor-pointer" id=${serviceId}>
            <i class="fa-solid fa-arrow-right service-item-icon" style="color: #0E74BE"></i>
            <p class="service-text">${serviceName}</p>
        </div> `;

        repairAndCleaningColumn.innerHTML += repairServiceItemHTML
}

var serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {
    item.addEventListener("click", function(){
        currentId = this.id;
        location.href = "single-service.html?id=" + currentId;
    });
});
