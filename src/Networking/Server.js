const apiGetDataList = 'https://lamont.pogofdev.net/api/v1/products/getList';
const apiLogin = 'http://lamont.pogofdev.net/api/login';


async function getDataFromServer() {
    try {
        let response = await fetch(apiGetDataList, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer admin'
            }
        });
        let responsejson = await response.json();
        return responsejson.data.products;
    } catch (error) {
        console.error('Error is :' + error);
    }

}

async function loginserver(mycode) {
    try {
        let response = await fetch(apiLogin, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: mycode,
            })
        });
        let responsejson = await response.json();
        return responsejson;
    } catch (error) {
        return error.json();
    }
}


export {getDataFromServer}
export {loginserver}