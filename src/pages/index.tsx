type Props = { title: string }

const bla = 'var'

const Hello = ({ title = 'Erickson' }: Props) => (
  <main>
    <h1>{title}</h1>
  </main>
)

export default Hello
