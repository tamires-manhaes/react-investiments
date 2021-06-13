import { Link } from "react-router-dom";

export default function Header({ isHome, title, size, total, percentage }) {
  let fontSize = 'text-xl';
  
  const fixedPercentage = (percentage ? percentage.toFixed(2) : '')
  
  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-gray-300 mx-auto p-4 flex flex-col">
        {isHome === true ? (
            <h1 className={`text-center font-semibold ${fontSize}`}>{title}</h1>
          ) : (
            <>
              <Link to="/">Home</Link>
              <h1 className={`text-center font-semibold ${fontSize}`}>{title}</h1>
              <span className={`text-center font-semibold ${fontSize} `}>
                {!percentage ? `react-investments` : ''}
              </span>
              <span className={`text-center font-semibold ${percentage < 0 ? 'negative' : 'positive'}` }>
                Rendimento Total: R${total} | {fixedPercentage}%
              </span>
            </>          
          ) 
        }
      </div>
    </header>
  );
}
