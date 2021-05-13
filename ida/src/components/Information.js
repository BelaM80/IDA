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
            <h2>Gemeinsam ein Zeichen setzen - in Duisburg und am Nierderrhein</h2>
            <p>Der Internationale Tag gegen Homo, Bi- und Transfeindlichkeit (kurz IDAHOBIT) 
            findet jedes Jahr am 17.05. statt. Denn immer noch gibt es in vielen Bereichen der 
            Gesellschaft Diskriminierung und Ausgrenzen von Lesben, 
            Schwulen, Bisexuellen sowie trans*, inter* und anderen queeren Menschen (LSBTIQ*). 
            Ein „schiefer Blick“, abschätzige Bemerkungen, aber auch offener Hass und Gewalt sind ebenso alltägliche Diskriminierungen wie vielleicht 
            harmlos wirkende Ausdrücke wie „Das ist doch voll schwul!“.</p>
            <p>Umso wichtiger ist es, dass wir als Gesellschaft ein deutliches Zeichen hier gegen setzen. Der IDAHOBIT am 17.05. ist ein solches Zeichen. 
            Aus vielen Bereichen der LSBTIQ*-Community heraus finden traditionell an diesem Tag 
            Veranstaltungen oder Aktivitäten statt.</p>
            <p>Aber auch Institutionen und Organisationen zeigen an diesem Tag Flagge und hissen die Regenbogenflagge als sichtbares Zeichen der Unterstützung.
            Wir freuen uns, dass viele Duisburger und Duisburgerinnen unserem Aufruf gefolgt sind. Gerne stellen wir hier also ihre Botschaft vor!
            Aber: es muss auch erwähnt werden, dass wir viele Menschen aus Duisburg angeschrieben haben (auch von institutioneller Seite), 
            die nach Außen hin mit Diversity und Offenheit werben, aber weder auf unsere mehrmaligen 
            Anfragen reagiert haben, geschweige denn an der Aktion teilgenommen haben.</p>
        </Card>
    )
};

export default Information;