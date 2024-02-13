export default function Problems(){
    console.log("hello")
    return (
        <div className="problems--main main">
            <div className="filter-problems">
                <ul className="filter-problems--header">
                    <li>
                        array 322
                    </li>
                    <li>
                        string 32
                    </li>
                    <li>
                        greedy 123
                    </li>
                    <li>
                        binarytree 543
                    </li>
                </ul>
            </div>
            
            <div className="problems--table--main">
                <div className="problems--table--header">
                    <input type="text" placeholder="search" />
                </div>
            </div>
        
            <div className="problems--table">
                    <div className="problems--table--head">
                        <div>status</div>
                        <div>title</div>
                        <div>acceptance</div>
                        <div>difficulty</div>
                        <div>total solved</div>
                    </div>
                    <div className="problems--table--body">
                        <div>
                            <div>+</div>
                            <div>sort array in ascending order</div>
                            <div>78%</div>
                            <div>easy</div>
                            <div>435453</div>
                        </div>
                    </div>
                    <div className="problems--table--body">
                        <div>
                            <div>+</div>
                            <div>sort array in ascending order</div>
                            <div>78%</div>
                            <div>easy</div>
                            <div>435453</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}