import { execa } from 'execa'

const main = () => {
	execa('ls', ['-l']).then(({stdout}) => {
		console.log(stdout)
		})
}

main()