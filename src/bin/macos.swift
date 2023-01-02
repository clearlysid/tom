import Cocoa

func printMouseLocation() {
		print("mouse location: ", NSEvent.mouseLocation)
}


// repeat printMouseLocation() every 0.5 seconds
let timer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { _ in
		printMouseLocation()
}


