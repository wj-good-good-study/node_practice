const BookModel = require('../model/BookModel');
const UserModel = require('../model/UserModel')
const { Op } = require('sequelize');
const sequelize = require('../sequelize')

/* const getbook = async (price1, price2, type) => {
    const books = await BookModel.findAll({
        attributes: ['name', ['author', '作者'], 'price'],
        where: {
            [Op.and]: [
                {
                    price: {
                        [Op.gt]: price1,
                        [Op.lt]: price2,
                    }
                },
                { type: type }
            ]
        },
        order: [
            ['id', 'DESC']
        ]
    })
    return JSON.parse(JSON.stringify(books));
}
getbook(10, 50, 'A').then(data => console.log(data)) */

/* const getbooks = async (type) => {
    const books = await BookModel.findAll({
        attributes: [
            'type',
            [sequelize.fn('SUM', sequelize.col('price')), 'sum']
        ],
        group: 'type',
        where:{
            type:type
        }
    })
    return JSON.parse(JSON.stringify(books));
}
getbooks('A').then(data => console.log(data)) */


/* const addbooks = async(id,name,price,author,type) =>{
    const books = await BookModel.create({
        id:id,
        name:name,
        price:price,
        author:author,
        type:type
    })
    return books.toJSON()
}
addbooks(11,'静夜思',10,'李白','D').then(data=>console.log(data)) */
/* const addbooks = async(id,name,price,author,type) =>{
    let books = BookModel.build({
        id:id,
        name:name,
        price:price,
        author:author,
        type:type
    })
    books = await books.save()
    return books.toJSON()
}
addbooks(11,'静夜思',10,'李白','D').then(data=>console.log(data)) */

// const updatebooks = async()=>{
//     const books = await BookModel.update({note:'价格便宜'},{
//         where:{
//             price:{
//                 [Op.lt]:20
//             }
//         }
//     })
//     return books;
// }
// updatebooks().then(data=>console.log(data))

/* const deletebooks = async(name)=>{
    const books = await BookModel.destroy({
        where:{name:name}
    })
    return books
}
deletebooks('静夜思').then(data=>console.log(data)) */

/* const getbooks = async (pageNum, pageSize) => {
    const books = await BookModel.findAll({
        attributes: { exclude: ['note', 'type'] },
        offset: (pageNum - 1) * pageSize,
        limit: pageSize,
    })
    return books
}

getbooks(3, 4).then(data => { data.length ? data.map(book => console.log(book.toJSON())) : console.log('No data') }) */

UserModel.hasOne(BookModel,{foreignKey:'id'})
BookModel.belongsTo(UserModel,{foreignKey:'id'})
const getbooks = async () => {
    const books = await BookModel.findAll({
        include:{
            model:UserModel
        }
    })
    return JSON.parse(JSON.stringify(books))
}

getbooks().then(data => console.log(data))