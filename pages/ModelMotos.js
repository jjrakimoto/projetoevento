import Api from '../pages/Api';

export async function pesquisarNomeMotos(nomeMotos){
    try {
        const resultado = await Api.get(`/motocicleta?motos=${nomeMotos}`);
        return resultado.data
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function salvarNovasMotos(idp,motop,valorp,fotop){
    try {
        await Api.post(`/motocicleta`,{
        id: idp,
        moto: motop,
        valor: valorp,
        foto: fotop
        })
        
    } catch (error) {
        console.log();
        return[];
    }
}

export async function alterarMotos(idp, motop,valorp,fotop){
    try {
        await Api.put(`/motocicleta/${idp}`,
        {
            id: idp,
            moto: motop,
            valor: valorp,
            foto: fotop
        });
        return 'Sucesso';
    } catch (error) {
        console.log(error);
        return[]
    }
}

export async function deletarMotos(idp){
    try {
        await Api.delete(`/motocicleta/${idp}`);
        return 'Sucesso'
    } catch (error) {
        console.log(error);
        return 'error';
    }
}
