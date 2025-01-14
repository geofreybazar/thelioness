import { useMutation } from '@tanstack/react-query';
import theBlockchainApi from '../services/theBlockchainApi';

function useGetElsaCoinBalance(){
    const { mutateAsync: getElsaCoinBalance, isPending:isPendingGetElsaCoinBalance, isSuccess, error, isError, status} = useMutation({
        mutationFn: theBlockchainApi.getElsaTokenBalance
        }); 
        
    return { getElsaCoinBalance, isPendingGetElsaCoinBalance, isSuccess, error, isError, status };
}

export default useGetElsaCoinBalance