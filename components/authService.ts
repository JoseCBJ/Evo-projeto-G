export const testLogin = (login: string, senha: string): number  => {
    if(login==='adm' && senha==='adm001'){
        return 10;
    }
    else if(login==='medico' && senha==='med002'){
        return 20;
    }
    else if(login==='paciente' && senha==='paci003'){
        return 30;
    }
    else{
        return 0;
    }
    
}