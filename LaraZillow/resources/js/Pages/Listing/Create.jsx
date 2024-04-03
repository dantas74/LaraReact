import { useForm } from '@inertiajs/react'
import { useRoute } from 'ziggy'

const CreateListing = () => {
  const { data, setData, post, errors } = useForm({
    beds: 0,
    baths: 0,
    area: 0,
    city: '',
    code: '',
    street: '',
    street_nr: '',
    price: 0,
  })

  const route = useRoute()

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('listing.index'))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Beds</label>
            <input id="beds" value={data.beds} onChange={e => setData('beds', e.target.value)} type="text"/>
            {errors.beds && <div>{errors.beds}</div>}
          </div>

          <div>
            <label>Baths</label>
            <input id="baths" value={data.baths} onChange={e => setData('baths', e.target.value)} type="text"/>
            {errors.baths && <div>{errors.baths}</div>}
          </div>

          <div>
            <label>Area</label>
            <input id="area" value={data.area} onChange={e => setData('area', e.target.value)} type="text"/>
            {errors.area && <div>{errors.area}</div>}
          </div>

          <div>
            <label>City</label>
            <input id="city" value={data.city} onChange={e => setData('city', e.target.value)} type="text"/>
            {errors.city && <div>{errors.city}</div>}
          </div>

          <div>
            <label>Post Code</label>
            <input id="code" value={data.code} onChange={e => setData('code', e.target.value)} type="text"/>
            {errors.code && <div>{errors.code}</div>}
          </div>

          <div>
            <label>Street</label>
            <input id="street" value={data.street} onChange={e => setData('street', e.target.value)} type="text"/>
            {errors.street && <div>{errors.street}</div>}
          </div>

          <div>
            <label>Street Nr</label>
            <input id="street_nr" value={data.street_nr} onChange={e => setData('street_nr', e.target.value)} type="text"/>
            {errors.street_nr && <div>{errors.street_nr}</div>}
          </div>

          <div>
            <label>Price</label>
            <input id="price" value={data.price} onChange={e => setData('price', e.target.value)} type="text"/>
            {errors.price && <div>{errors.price}</div>}
          </div>

          <div>
            <button type="submit">Create</button>
          </div>
        </div>
      </form>
    </>
  )
}   

export default CreateListing
