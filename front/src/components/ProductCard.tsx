import React from 'react'


export interface ProductCardProps {
    title: string,
    price:number,
}

export const ProductCard = ({ title, price }: ProductCardProps)=> {
  return (
    <div>      
    <p className='fw-bold'>{title}</p>
    <p className='fw-semibold'>{price}€</p>
    </div>
  )
}
