
const fakeData = 
[{
  "_id": "5fd5a187e1d7a0dadd265a08",
  "picture": "http://placehold.it/32x32",
  "age": 37,
  "name": "Richard Slater",
  "gender": "male",
  "income": 41717,
  "email": "richardslater@comvene.com",
  "phone": "+1 (888) 570-2563",
  "address": "683 Roosevelt Place, Lindisfarne, New Mexico"
},
{
  "_id": "5fd5a187de9fdeeb1e51ef02",
  "picture": "http://placehold.it/32x32",
  "age": 26,
  "name": "Bray Meyers",
  "gender": "male",
  "income": 46773,
  "email": "braymeyers@comvene.com",
  "phone": "+1 (917) 500-2340",
  "address": "857 Dearborn Court, Harrison, Washington"
},
{
  "_id": "5fd5a187360b5c3b3a3e955e",
  "picture": "http://placehold.it/32x32",
  "age": 21,
  "name": "Blevins Gonzales",
  "gender": "male",
  "income": 40652,
  "email": "blevinsgonzales@comvene.com",
  "phone": "+1 (932) 535-3152",
  "address": "765 Krier Place, Utting, Kentucky"
},
{
  "_id": "5fd5a187f6f0559e0807d286",
  "picture": "http://placehold.it/32x32",
  "age": 32,
  "name": "Avis Ingram",
  "gender": "female",
  "income": 31063,
  "email": "avisingram@comvene.com",
  "phone": "+1 (991) 582-3875",
  "address": "612 Hart Place, Wakarusa, Missouri"
},
{
  "_id": "5fd5a18733e6cc952b2fc1a4",
  "picture": "http://placehold.it/32x32",
  "age": 30,
  "name": "Teresa Hicks",
  "gender": "female",
  "income": 39468,
  "email": "teresahicks@comvene.com",
  "phone": "+1 (858) 410-2788",
  "address": "129 Etna Street, Roberts, West Virginia"
},
{
  "_id": "5fd5a1871ecb6b6604beb30f",
  "picture": "http://placehold.it/32x32",
  "age": 26,
  "name": "Murphy Pierce",
  "gender": "male",
  "income": 39022,
  "email": "murphypierce@comvene.com",
  "phone": "+1 (841) 562-3852",
  "address": "503 Kiely Place, Grayhawk, New Hampshire"
},
{
  "_id": "5fd5a18743049258b6a1f2fe",
  "picture": "http://placehold.it/32x32",
  "age": 31,
  "name": "Kendra Raymond",
  "gender": "female",
  "income": 43710,
  "email": "kendraraymond@comvene.com",
  "phone": "+1 (862) 476-3327",
  "address": "491 Dahill Road, Linganore, Ohio"
},
{
  "_id": "5fd5a1876d488bae0d0b274c",
  "picture": "http://placehold.it/32x32",
  "age": 24,
  "name": "Carly Gould",
  "gender": "female",
  "income": 37767,
  "email": "carlygould@comvene.com",
  "phone": "+1 (818) 560-2488",
  "address": "898 Sedgwick Place, Wescosville, California"
},
{
  "_id": "5fd5a187037ec553e916198d",
  "picture": "http://placehold.it/32x32",
  "age": 21,
  "name": "Iva Mcdaniel",
  "gender": "female",
  "income": 30093,
  "email": "ivamcdaniel@comvene.com",
  "phone": "+1 (886) 569-3268",
  "address": "232 Cobek Court, Grahamtown, Maine"
},
{
  "_id": "5fd5a1874e9f64f04154fe80",
  "picture": "http://placehold.it/32x32",
  "age": 27,
  "name": "Gibson Horne",
  "gender": "male",
  "income": 46482,
  "email": "gibsonhorne@comvene.com",
  "phone": "+1 (823) 544-3428",
  "address": "974 Voorhies Avenue, Fowlerville, Montana"
},
{
  "_id": "5fd5a187c2478ea2e8198624",
  "picture": "http://placehold.it/32x32",
  "age": 36,
  "name": "Franco Chaney",
  "gender": "male",
  "income": 33237,
  "email": "francochaney@comvene.com",
  "phone": "+1 (814) 517-3924",
  "address": "229 Devoe Street, Evergreen, Alaska"
},
{
  "_id": "5fd5a187d8a66cc01866a518",
  "picture": "http://placehold.it/32x32",
  "age": 29,
  "name": "Kirkland Palmer",
  "gender": "male",
  "income": 43916,
  "email": "kirklandpalmer@comvene.com",
  "phone": "+1 (844) 410-2535",
  "address": "127 Verona Place, Oley, Texas"
},
{
  "_id": "5fd5a1875d5ee54621e587c7",
  "picture": "http://placehold.it/32x32",
  "age": 31,
  "name": "Benton Munoz",
  "gender": "male",
  "income": 31965,
  "email": "bentonmunoz@comvene.com",
  "phone": "+1 (920) 600-3715",
  "address": "958 Vandalia Avenue, Cumberland, Virginia"
},
{
  "_id": "5fd5a1877336d55724bc3606",
  "picture": "http://placehold.it/32x32",
  "age": 24,
  "name": "Trisha Wolf",
  "gender": "female",
  "income": 43785,
  "email": "trishawolf@comvene.com",
  "phone": "+1 (819) 487-3814",
  "address": "767 Beard Street, Robinson, Colorado"
},
{
  "_id": "5fd5a187a214d6f7e3c026bc",
  "picture": "http://placehold.it/32x32",
  "age": 30,
  "name": "Annabelle Lindsey",
  "gender": "female",
  "income": 44353,
  "email": "annabellelindsey@comvene.com",
  "phone": "+1 (932) 470-2782",
  "address": "175 Coleridge Street, Corinne, District Of Columbia"
}
]


const shuffle = a => {
  for (let i= a.length; i; i--){
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
   
  
}
shuffle(fakeData);

export default fakeData;


