const fs = require('fs');

const getAll = (entity, callback) => {
    fs.readFile(`${__dirname}/../data/${entity}.json`, "utf8", (err, jsonString) => {
        if (err) {          
          return err;
        }        
        return callback(null, jsonString);
      });
}

const getOne = (entity, id, callback) => {
    fs.readFile(`${__dirname}/../data/${entity}.json`, "utf8", (err, jsonString) => {
        if (err) {
            return err;
        }
        const data = JSON.parse(jsonString);
        const item = data.find(item => item.id === parseInt(id));
        if (!item) {
            return callback("no user founded");
        }
        return callback(null, item);
        }
    );
}

const create = (entity, newItem, callback) => {
    try{
        fs.readFile(`${__dirname}/../data/${entity}.json`, "utf8", (err, jsonString) => {
            if (err) {
                return err;
            }
            const data = JSON.parse(jsonString);
            newItem.data.id = data.length + 1;
            data.push(newItem.data);
            fs.truncate(`${__dirname}/../data/${entity}.json`, 0, (err) => {
                if (err) {
                    return err;
                }else{
                    fs.writeFile(`${__dirname}/../data/${entity}.json`, JSON.stringify((data)), (err) => {
                        if (err) {
                            return err;
                        }
                        return callback(null, data);
                    });
                }
            })
        });
    }catch(e){
        console.log(e)
    }
}

async function update(entity, id, updatedItem){
        await fs.promises.readFile(`${__dirname}/../data/${entity}.json`, "utf8")
        .then(jsonString => {
            const data = JSON.parse(jsonString);
            const index = data.findIndex(item => item.id === parseInt(id));
            if (index === -1 ) {
                return ("no user founded");
            }
            for (const key in updatedItem.data) {
                data[index][key] = updatedItem.data[key];
            }
            fs.promises.writeFile(`${__dirname}/../data/${entity}.json`, JSON.stringify(data))
            .then(() => {
                return (data);
            })
        }).catch(err => {
            console.log(err);
            return(err, null)
        })
}

const deleter = (entity, id, callback) => {
    fs.readFile(
        `${__dirname}/../data/${entity}.json`, "utf8", (err, jsonString) => {
            if(err){
                return err
            }
            const data = JSON.parse(jsonString);
            const data_filtered = data.filter(item => item.id !== parseInt(id));
            fs.writeFile(
                `${__dirname}/../data/${entity}.json`, JSON.stringify(data_filtered), (err) => {
                    if(err){
                        return err
                    }
                    return callback(null, data_filtered);
                }
            )
        }
    )
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleter
};


