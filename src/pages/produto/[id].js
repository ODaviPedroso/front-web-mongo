import { useNavigation } from 'next/navigation';
import { useRouter } from 'next/router';


const Produto = () => {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <div>
        <h1>Detalhes do Produto {id}</h1>
      </div>
    );
  };
  
  export default Produto;