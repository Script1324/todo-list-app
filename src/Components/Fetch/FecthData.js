
export const getData = async(setTasks) =>{
            const data = await fetch(`http://localhost:5000/tasks`)
            const json =  await data.json();
                setTasks(json)
}