//Question 2
function transform(input) {
    var output = []
    let crsp  = {}
    crsp['reductionVoucher'] = 'Flat voucher' 
    crsp['sales'] = 'Sales' 

    input.forEach(e => {
       if (typeof e.price !== 'undefined') {
            let obj = {}
            obj["basePrice"] = e.price + " €"
            switch(e.savingsType){
                case 'total':
                    obj["description"] = 'You are saving ' + e.savings + ' € related to the initial price'
                    obj["price"] =  e.price-e.savings + " €"
                    obj["saving"] = e.savings + " €"
                    obj["title"] = crsp[e.kind]
                    break;
                
                case 'percent':
                    obj["description"] = 'You are saving ' + (e.price*(e.savings/100)) + ' € related to the initial price'
                    obj["price"] =  (e.price*(1-(e.savings/100))) + " €"
                    obj["saving"] = e.savings + " %"
                    obj["title"] = crsp[e.kind]
                    break;
                
                
            }
           
            output.push(obj) 
       }
        
        
        
    });

    return output
}

const input = [
    {
    price: 3000,
    kind: 'reductionVoucher',
    savings: 300,
    savingsType: 'total',
    },
    {
    price: undefined,
    kind: 'sales',
    savings: 10,
    savingsType: 'percent',
    },
    {
    price: 3000,
    kind: 'sales',
    savings: 15,
    savingsType: 'percent',
    }
]
console.log(transform(input))
// output :
// [
// {
// basePrice: '3 000 €',
// description: 'You are saving 300 € related to the initial price',
// price: '2 700 €',
// savings: '300 €',
// title: 'Flat voucher',
// },
// {
// basePrice: '3 000 €',
// description: 'You are saving 450 € related to the initial price',
// price: '2 550 €',
// savings: '15 %',
// title: 'Sales',
// }
// ]