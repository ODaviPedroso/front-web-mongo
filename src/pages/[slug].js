import { useNavigation } from 'next/navigation';
import { useRouter } from 'next/router';


const Teste = () => {
    const router = useRouter();
    const { slug } = router.query;
  
    return (
      <div>
        <h1>Detalhes do teste {slug}</h1>
      </div>
    );
  };
  
  export default Teste;