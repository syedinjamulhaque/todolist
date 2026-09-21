import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import GhostFibers from './components/GhostFibers';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [animatingId, setAnimatingId] = useState(null)

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos, isLoaded])

  useEffect(() => {
    let lsget = localStorage.getItem("todos")
    if (lsget) {
      let items = JSON.parse(lsget)
      setTodos(items)
    }
    setIsLoaded(true)
  }, [])

  const toggleFinish = () => setShowFinished(!showFinished)

  const handleChange = (e) => setTodo(e.target.value)

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleEdit = (e, id) => {
    let edit = todos.filter(item => item.id === id)
    setTodo(edit[0].todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  const handleCheckbox = (e) => {
  let id = e.target.name
  let index = todos.findIndex(item => item.id === id)
  const willComplete = !todos[index].isCompleted

  if (willComplete) {
    setAnimatingId(id)
    setTimeout(() => {
      let newTodos = [...todos]
      let idx = newTodos.findIndex(item => item.id === id)
      newTodos[idx].isCompleted = true
      setTodos(newTodos)
      setAnimatingId(null)
    }, 400)
  } else {
    let newTodos = [...todos]
    newTodos[index].isCompleted = false
    setTodos(newTodos)
  }
}

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className="relative flex flex-1 justify-center font-jp overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          <GhostFibers
            lineColor="#E8590C"
            glowColor="#FFB347"
            speed={0.2}
            scale={2}
            rotation={0}
            rotationSpeed={0.25}
            layers={4}
            waveAmplitude={0.015}
            waveFrequency={3}
            waveSpeed={0.15}
            layerSpeed={0.08}
            twist={0.1}
            twistFrequency={5}
            twistSpeed={1.2}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={16}
            glowFalloff={10}
            glowIntensity={1.6}
            brightness={2}
            blueBoost={1}
            vignette={0.8}
            grain={0.05}
            dpr={1}
            lightMode={false}
            fps={60}
            paused={false}
          />
        </div>
        <section className='md:w-3/4 w-[90%] mx-auto my-6 rounded-2xl px-6 py-3 space-y-3 bg-white/25 backdrop-blur-lg'>
          <h1 className='text-2xl font-bold text-center font-brand'>Kiroku Ticks</h1>

          <div className='flex gap-3'>
            <input
              onChange={handleChange}
              className='rounded-xl w-full border px-2'
              type="text"
              value={todo}
              placeholder="What's happening?"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length <= 3}
              className='hover:cursor-pointer rounded-xl bg-[#111111] text-white hover:bg-[#333333] disabled:opacity-40 disabled:cursor-not-allowed font-bold p-1 w-16'
            >
              Save
            </button>
          </div>

          <div className='flex gap-2 items-center'>
            <button
              onClick={toggleFinish}
              className='hover:cursor-pointer rounded-xl bg-[#111111] text-white hover:bg-[#333333] font-bold p-2 w-full flex justify-center'
            >
              {(showFinished) ? "Click to Show Pending Tasks..." : "Click to Show Finished Tasks"}
            </button>
          </div>

          <div className='mx-auto h-px w-4/5 bg-[#D4D4D4]'></div>

          {todos.length === 0 && (
            <div className='text-lg text-gray-800 text-center'>No Todos to Display</div>
          )}

          {todos.map(item => {
            const isSlicing = animatingId === item.id
            return (showFinished === item.isCompleted) && (
              <div
                key={item.id}
                className={`relative flex justify-between items-center bg-white/20 hover:bg-white/30 transition-colors duration-200 rounded-xl px-3 py-2.5 overflow-hidden ${isSlicing ? 'cut-collapse' : ''}`}
              >
                <div className='flex gap-3 items-center'>
                  <input
                    onChange={handleCheckbox}
                    type="checkbox"
                    name={item.id}
                    checked={item.isCompleted}
                    className='w-5 h-5 accent-[#C9A227] cursor-pointer'
                  />
                  <div className={`text-lg text-gray-900 font-medium truncate max-w-[140px] sm:max-w-none ${item.isCompleted ? "line-through text-gray-500" : ""}`}>
                    {item.todo}
                  </div>
                </div>

                <div className='flex gap-2'>
                  <button onClick={(e) => handleEdit(e, item.id)} className='hover:cursor-pointer rounded-xl bg-[#111111] text-white hover:bg-[#333333] font-bold p-2 w-10 flex justify-center'>
                    <FaEdit />
                  </button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='hover:cursor-pointer rounded-xl bg-[#111111] text-white hover:bg-[#333333] font-bold p-2 w-10 flex justify-center'>
                    <MdDeleteForever />
                  </button>
                </div>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App