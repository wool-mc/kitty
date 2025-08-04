import { useEffect, useState, type FC } from "react"
import type { Kitty } from "../types"
import { getKittys } from "../services/api";



const AllKitty: FC = () => {
    const [kittys, setKittys] = useState<Kitty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    
    useEffect(() => {
        const fetchKittys = async () => {
            try {
                setLoading(true);
                const response = await getKittys();
                setKittys(response.data || []);
            } catch(err) {
                setError(err instanceof Error ? err.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };
        
        fetchKittys();
    },[]);
    
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    
    return (
        <>
            <ul className="kittys">
                {kittys
                .map(kitty => (
                    <li className="kitty" key={kitty.id}>
                        <img className="kittypic" src={kitty.url} />
                    </li>
                ))
                } 
            </ul>
        </>
    )
}

export default AllKitty