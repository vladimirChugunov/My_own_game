import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import './HomePageView.css'


function HomeView() {
  const score = useSelector((state) => state.points.score)
  const questions = useSelector((state) => state.questions);
  const questionsMusic = useSelector((state) => state.questions.Music);
  const questionsFilms = useSelector((state) => state.questions.Films);
  const questionsBlackBox = useSelector((state) => state.questions.BlackBox);
  const questionsRiddles = useSelector((state) => state.questions.Riddles);

  return (
    <>
      <div class="header">
        <h1>Своя Игра</h1>
        <span className="score"><span class="bird"></span>Очки: {score}</span>
      </div>
      <div>
        <div className='tableContainer'>
          <table>
            { 
              questions
                ? (
                  <>
                    <tr>
                      <td>{`${questionsMusic[0].category}`}</td>
                      {
                        questionsMusic.map(
                          (item) => {
                            return (item.visible)
                              ? <Link className="link" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                              : <Link className="link display-none" disabled key={item.id} to={`/${item.categoryName}}/${item.id}`}><td >{item.cost}</td></Link>
                          },
                        )
                      }
                    </tr>

                    <tr>
                      <td>{`${questionsFilms[0].category}`}</td>
                      {
                        questionsFilms.map(
                          (item) => {
                            return (item.visible)
                              ? <Link className="link" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                              : <Link className="link display-none" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                          }
                        )
                      }
                    </tr>

                    <tr>
                      <td>{`${questionsBlackBox[0].category}`}</td>
                      {
                        questionsBlackBox.map(
                          (item) => {
                            return (item.visible)
                              ? <Link className="link" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                              : <Link className="link display-none" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                          }
                        )
                      }
                    </tr>

                    <tr>
                      <td>{`${questionsRiddles[0].category}`}</td>
                      {
                        questionsRiddles.map(
                          (item) => {
                            return (item.visible)
                              ? <Link className="link" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                              : <Link className="link display-none" key={item.id} to={`/${item.categoryName}/${item.id}`}><td >{item.cost}</td></Link>
                          }
                        )
                      }
                    </tr>

                  </>
                )
                : <p>Список задач пуст</p>
            }
          </table>
        </div>
      </div>
    </>
  );
}

export default HomeView;
