import './styles/Links.css';

function Links() {
    return (
        <div>

            {/* 4-UPs */}
            <div className="SheetStyle">
                <iframe className="SheetStyle" title="4ups" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwUW1pvRpaBHK7VIj1T3lb8gUuLP5H_sPo0sJJqc2v-sPiySbS7gCr67CPA1wPdfzu6yljXV-XVD4Q/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>

            {/* Time Tracking */}
            <div className="SheetStyle">
                <iframe className="SheetStyle" title="timetracking" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSp7FnkVePCsLDkYsFF9lS-r-tOrPbfqvIKApv6GG9vQI6t5PzP9PombWH19WzUqUYVJnIF_tIEe4M8/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>

            <div>
                <p>Project Documentation:</p>
                <a href="https://docs.google.com/document/d/1MjN8cIFJxX2y1wPUVOCOWonoWTahiBIBZIv2SXpesTc/edit?usp=sharing">Our Final Plan</a> <br/>
                <a href="https://docs.google.com/document/d/1PI0WF8ciA6L70ifxCM2B5onAWbS4awFqExqZKKp-aHE/edit?usp=sharing">Our Project Tools and Technologies</a>
            </div>

            <div>
                <p>Meeting Agendas:</p>
                <a href="https://docs.google.com/document/d/1ZSnfqUxowGJcSabjp3dl5CW-auqA3xlHIACWLrAZVVE/edit?usp=sharing">9/29/2022</a>
            </div>
    </div>
    )
}

export default Links;