import React from 'react'

function Card({username="Naruto"}) {
  return (
    <div className="w-60 h-60 rounded-xl mb-3">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono  text-xl">{username}</h1>
        </div>
      </div>
  )
}

export default Card