import { authApi } from '@/api/auth-api'
import { useEffect, useState } from 'react'

export interface HomeSProps{}

export function HomeS(props: HomeSProps) {
    const [postList, setPostList] = useState([])
    const { getPost } = authApi

    useEffect( () => {
        async function listPost() {
            const response = await getPost();
			const { data } = await response.data;
			setPostList(data);
        }
        listPost()
        }, []);

  return (
    <div className="row tm-catalog-item-list">
        {
             postList.map((post) => (
                    <div key={post._id} className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <input type="image" src="img/tn-01.jpg" alt={"photo"} className="img-fluid tm-catalog-item-img" />
                        </div>
                        <div className="p-4 tm-bg-gray tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{ post.title }</h3>
                            <p className="tm-catalog-item-text">{ post.description }</p>
                        </div>
                    </div> 
                )
              )
        }
    </div>
  )
}