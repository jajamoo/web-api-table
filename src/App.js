import logo from './logo.svg';
import {useEffect, useState} from "react";
import {Button, Table} from "react-bootstrap";
import {useTable} from "react-table";
import BTable from 'react-bootstrap/Table';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [idToggle, setIdToggle] = useState(false);
    const [search, setSearch] = useState('');
    const [original, setOriginal] = useState([]);
    const [showApproved, setShowApproved] = useState(false);
    const [approvedIds, setApprovedIds] = useState([]);

    const fetchData = () => {
        fetch(`http://localhost:3000/qc-metrics`)
            .then((response) => response.json())
            .then((actualData) => {
                setData(actualData);
                setOriginal(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleHeaderClick = (event) => {
        const id = event.target.id;
        const data2 = [...data];
        if(idToggle) {
            data2.reverse((a, b) => {
                if (a[id] < b[id]) return -1;
                if (a[id] > b[id]) return 1;
            });
        } else {
            data2.sort((a, b) => {
                if (a[id] < b[id]) return -1;
                if (a[id] > b[id]) return 1;
            });
        }
        setIdToggle(!idToggle);
        setData(data2);
    };

    const handleApprove = (event) =>{
        let approvedLabs = [];

        approvedIds.forEach( approvedId => {
            const filteredArray = original.filter((lab) => {
                return lab.id == approvedId
            });
            if(filteredArray.length) {
                approvedLabs.push(filteredArray[0]);
            }
        });
        setShowApproved(!showApproved);
        setData(approvedLabs);
    };

    const handleCheckbox = (event) =>{
        console.log(event.target.checked);
        const checked = event.target.checked;
        const checkboxId = event.target.id;

        if(checked) {
            setApprovedIds([...approvedIds, checkboxId]);
        } else {
            const filteredApprovedIds = approvedIds.filter((approvedId) => {
                return approvedId !== checkboxId;
            });
            setApprovedIds(filteredApprovedIds);
        }
    };
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    const handleReset = (e) => {
        setData(original);

        setApprovedIds([]);
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect( () => {
        if(search.length) {
            const filterResults = data.filter((lab) => {
                return lab.accession_id.includes(search)
                    || lab.run_id.includes(search)
                    || lab.type.includes(search);
            });
            setData(filterResults);
        } else {
            setData(original)
        }
    }, [search]);

    useEffect(() =>{
        console.log(approvedIds);
    }, [approvedIds]);

    return (
        <div className="App">
            <div class="search-stuff">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={search} />

                <Button id="approve-button" onClick={handleApprove} variant="primary me-1"> Approve Samples </Button>
                <Button id="approve-button" onClick={handleReset} variant="primary me-1"> Reset </Button>
            </div>

            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <th
                        id="id"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >ID
                    </th>
                    <th
                        id="accession_id"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Accession ID</th>
                    <th
                        id="cnv_qc"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >CNV QC</th>
                    <th
                        id="mean_coverage"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Mean Coverage</th>
                    <th
                        id="mean_q_score"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Mean Q Score</th>
                    <th
                        id="msi_qc"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >MSI QC</th>
                    <th
                        id="pair_accession"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Pair Accession</th>
                    <th
                        id="percent_bases_over_1x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 1x</th>
                    <th
                        id="percent_bases_over_10x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 10x</th>
                    <th
                        id="percent_bases_over_20x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 20x</th>
                    <th
                        id="percent_bases_over_50x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 50x</th>
                    <th
                        id="percent_bases_over_100x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 100x</th>
                    <th
                        id="percent_bases_over_150x"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over 150x</th>
                    <th
                        id="percent_bases_over_q30"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Bases Over Q30x</th>
                    <th
                        id="percent_perfect_index"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Percent Over Perfect Index</th>
                    <th
                        id="run_id"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Run ID</th>
                    <th
                        id="status"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Status</th>
                    <th
                        id="type"
                        style={{cursor: "pointer"}}
                        onClick={handleHeaderClick}
                    >Type</th>

                    <th>Approved?</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.accession_id}</td>
                        <td>{item.cnv_qc}</td>
                        <td>{item.mean_coverage}</td>
                        <td>{item.mean_q_score}</td>
                        <td>{item.msi_qc}</td>
                        <td>{item.pair_accession}</td>
                        <td>{item.percent_bases_over_1x}</td>
                        <td>{item.percent_bases_over_10x}</td>
                        <td>{item.percent_bases_over_20x}</td>
                        <td>{item.percent_bases_over_50x}</td>
                        <td>{item.percent_bases_over_100x}</td>
                        <td>{item.percent_bases_over_150x}</td>
                        <td>{item.percent_bases_over_q30}</td>
                        <td>{item.percent_perfect_index}</td>
                        <td>{item.run_id}</td>
                        <td>{item.status}</td>
                        <td>{item.type}</td>
                        <td>
                            <input id={item.id} onClick={handleCheckbox} type="checkbox" name="approve-check-box"
                                   value={item.id}
                                   // checked={approvedIds.includes(item.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>


    );
}

export default App;
