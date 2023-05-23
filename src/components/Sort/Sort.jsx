import "./Sort.scss"

export function Sort(){
  return (
    <div className="container d-flex align-items-center sort gap-5 py-2">
      <form className="d-flex align-items-center w-75 justify-content-between" onSubmit={(evt)=>{evt.preventDefault()}}>
        <select className="h-100 m-0">
          <option>Любая категория</option>
        </select>
        <input type="text" placeholder="Что будем искать ?" className="h-100 m-0"/>
        <select className="h-100 m-0">
          <option>По всей Узбекистану</option>
        </select>
        <button>Найти</button>
      </form>
      <button className="w-25">Добавить обьявления</button>
    </div>
  );
}