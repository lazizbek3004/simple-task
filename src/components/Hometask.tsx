import { useState } from "react"








const Hometask = () => {

	const [newEl, setNewEl] = useState('')

	const [arr, setArr] = useState(['lazizbro'])

	const [deleted, setDeleted] = useState('')

	const [peekEl, setPeekEl] = useState('')	

	const push = () => {
		
		newEl !== '' ?	setArr((preArr) => [...preArr, newEl]) : alert('Please first enter an element into input')


		setNewEl('')
	}

	let firstEl = arr[0]
	

	const pop = () => {
		
		setDeleted(d => d = firstEl)

		setArr(a => a = a.slice(1))


	}

	
	
  return (
	<div className="w-full h-[100dvh] flex flex-col justify-center items-center gap-[48px] ">
		<div className="flex items-center">
			<input value={newEl} onChange={(e) => setNewEl(n => n = e.target.value)} type="text" className="h-[36px] focus:outline-none border-[1px] border-gray-800 text-[20px] pl-[6px] rounded-[6px]" />
			<button onClick={() => push()} className="h-[36px] flex justify-center items-center p-[20px] bg-gray-500 text-white rounded-[6px] active:bg-gray-400 ">Push</button>
		</div>
		<div className="flex gap-[48px] items-end">
			<div className="flex flex-col gap-[12px] items-center">
				<div className="w-[120px] h-[40px] flex justify-center items-center border-[2px] border-black text-[18px] ">{deleted}</div>
				<button onClick={() => pop()} className=" w-[120px] h-[40px] text-[20px] bg-gray-500 text-white active:bg-gray-400 rounded-[6px] ">Pop</button>
			</div>
			
		
		
			<div className="customBorder flex flex-col gap-[12px] justify-end">
				{arr.map((el, index) => {
					if(el !== ''){
						return <div key={index} className="w-full h-[36px] flex justify-center items-center border-[2px] border-black">{el}</div>
					}
				})}

			</div>



			<div className="flex flex-col gap-[12px] items-center">
				<div className="w-[120px] h-[40px] flex justify-center items-center border-[2px] border-black text-[18px]">{peekEl}</div>
				<button onClick={() => setPeekEl(arr[0])} className=" w-[120px] h-[40px] text-[20px] bg-gray-500 text-white active:bg-gray-400 rounded-[6px] ">Peek</button>
			</div>


		</div>

		
	</div>
  )
}

export default Hometask