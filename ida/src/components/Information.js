import styled from "styled-components/macro";

const Card = styled.div`
width: 100%;
color: var(--secondary-color);
background-color: var(--primary-color);
padding: 0 0.8rem 0.8rem;
box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.42);

`

const Information = () => {
    return(
        <Card>
            <h2>Gemeinsam ein Zeichen setzen - in Duisburg und am Niederrhein</h2>
            <p>Der Internationale Tag gegen Homo, Bi- und Transfeindlichkeit (kurz IDAHOBIT) findet jedes Jahr am 17.05. statt. Denn immer noch gibt es in 
            vielen Bereichen der Gesellschaft Diskriminierung und Ausgrenzungen von Lesben, Schwulen, Bisexuellen sowie trans*, inter* und anderen queeren Menschen (LSBTIQ*). 
            Ein „schiefer Blick“, abschätzige Bemerkungen, aber auch offener Hass und Gewalt sind ebenso alltägliche Diskriminierungen wie vielleicht harmlos wirkende Ausdrücke wie „Das ist doch voll schwul!“.</p>
            <p>Umso wichtiger ist es, dass wir als Gesellschaft ein deutliches Zeichen hier gegen setzen. Der IDAHOBIT am 17.05. ist ein solches Zeichen. Aus vielen Bereichen der LSBTIQ*-Community heraus finden 
            traditionell an diesem Tag Veranstaltungen oder Aktivitäten statt.</p>
            <p>Wir freuen uns, dass viele Duisburgerinnen und Duisburger unserem Aufruf gefolgt 
            sind und wir auch Beiträge aus anderen Bundesländern veröffentlichen können.</p>
            <p>Jedoch sind wir auch überrascht, dass viele Firmen, Einrichtungen, Parteien und Personen es nicht für nötig befunden haben, sich an der Aktion zu beteiligen. Über 70 Mails und Briefe für diese 
            Aktion sind rausgegangen an die Ansprechpartner, Diversity-Beauftragten und weitere Personen.</p>
            <p>Die im Verhältnis hierzu geringe Beteiligung zeigt uns aber: Diversity-Beauftragte und Regenbogenflaggen "zieren" viele Behörden, Einrichtungen und Firmen, aber ob dies auch bedeutet, 
            dass dies im Alltag auch so ankommt? Wir müssen also "dran bleiben" und uns immer wieder aufs Neue für Akzeptanz und Gleichstellung einsetzen!</p>


        </Card>
    )
};

export default Information;