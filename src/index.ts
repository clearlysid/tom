import { execa } from 'execa'
import path from 'path'

const main = () => {
	execa(path.join('./bin/macos')).then(({stdout}) => {
		console.log(stdout)
		})
}

main()