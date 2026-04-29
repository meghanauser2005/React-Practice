import React, { useState } from 'react'
import { java_api } from './Api'

const Postdata = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)

    const formHandler = async (e) => {
        e.preventDefault()

        // Create FormData
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)
        formData.append("image", image)

        try {
            const response = await fetch(java_api, {
                method: "POST",
                body: formData   // ❗ Do NOT set headers
            })

            if (response.ok) {
                alert("Product added successfully ✅")

                // reset form
                setName("")
                setPrice("")
                setImage(null)
            } else {
                alert("Failed ❌")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <form onSubmit={formHandler} className='formsection'>
                
                <div>Product Name</div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <div>Price</div>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <div>Image</div>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />

                <br /><br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default Postdata