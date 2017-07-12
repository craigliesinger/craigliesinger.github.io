import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hack-ble',
  templateUrl: './hack-ble.component.html',
  styleUrls: ['./hack-ble.component.css'],
})
export class HackBLEComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

code1 = `
//Import needed libraries
#include <SPI.h>
#include <EEPROM.h>
#include <boards.h>
#include <RBL_nRF8001.h>
	
//Define global constant of which pin is which color to make code more readable
const int greenLEDPin = 5;
const int redLEDPin = 6;
const int blueLEDPin = 3;
`;
code2 = `
void setup() {
  // Make a serial connection for debugging when running via computer USB port.
  Serial.begin(9600);

  //Declare our LED pins as outputs
  pinMode(greenLEDPin, OUTPUT);
  pinMode(redLEDPin, OUTPUT);
  pinMode(blueLEDPin, OUTPUT);

  //Set the starting light color to even split RGB, mid level brightness (255 max)
  analogWrite(redLEDPin, 127);
  analogWrite(greenLEDPin, 127);
  analogWrite(blueLEDPin, 127);
  
  // Set your BLE Shield name here, max. length 10
  ble_set_name("LEDLamp");

  // Init. and start BLE library.
  ble_begin();
}
`;
code3 = `
void loop() {
  // put your main code here, to run repeatedly:
   if(ble_connected()){
    Serial.print(" BLE connected ");
  } else {
    Serial.print(" [ERROR] BLE NOT connected ");
  }
   ble_do_events();

//While the bluetooth is connected, read in data of location / value pairing 
   while(ble_available()){   
      byte led;
      byte val;   

      if(led = ble_read()){
      //read the first number for the led to address, and the second for the value...
        val = ble_read();
        analogWrite(led, val);
        Serial.print(led);
        Serial.print(":");
        Serial.print(val);
        Serial.print("\{n");
    }
  }
}
`;

code4 = `
import UIKit
// Create global instance of BLE framework
let myBLE = BLE()

class ViewController: UIViewController {
    //Note the place in the array being sent to the device that correspond to which color
    let redPin: Int = 5
    let greenPin: Int = 3
    let bluePin: Int = 1
   
    var brightness:Float =  0.5

    //Declare our labels so we can change their color based on screen brightness.
    @IBOutlet weak var redLabel: UILabel!
    @IBOutlet weak var greenLabel: UILabel!
    @IBOutlet weak var blueLabel: UILabel!
    @IBOutlet weak var brightLabel: UILabel!

    //Declare our initial array that we will send over and over.  [pin 3, value, pin 5, value, pin 6, value, null]
    var buf: [UInt8] = [0x03, 0x00, 0x05, 0x00, 0x06, 0x00, 0x00]

    //Declare our slider interfaces so we can style them
    @IBOutlet weak var redSlider: UISlider!
    @IBOutlet weak var greenSlider: UISlider!
    @IBOutlet weak var blueSlider: UISlider!
    @IBOutlet weak var brightSlider: UISlider!
    @IBOutlet weak var connectButton: UIButton!

    @IBAction func connectPressed(sender: AnyObject) {
        //I did nothing here.  There is a segue connection made in the storyboard.  A better way might be to use this function to do a scan for devices and only segue if there will be values to show and if not, keep user on screen with error message instead of moving the user to an empty table
    }

    //Send data whenever a color setting is changed
    @IBAction func redChanged(sender: AnyObject) {

        writeTheData()
    }
    @IBAction func greenChanged(sender: AnyObject) {
        writeTheData()
    }
    @IBAction func blueChanged(sender: AnyObject) {
        writeTheData()
    }

    //Send whenever brightness is changed, and also change our label font colors (so no black text on black background when brightness at lowest level
    @IBAction func brightChanged(sender: AnyObject) {
        self.brightness = brightSlider.value
        let labelColor = UIColor(white: CGFloat(1 - brightSlider.value), alpha: 1.0)
        redLabel.textColor = labelColor
        greenLabel.textColor = labelColor
        blueLabel.textColor = labelColor
        brightLabel.textColor = labelColor
        connectButton.titleLabel?.textColor = labelColor
        writeTheData()
    }

    //calculate the RGB values based on slider value and brightness multiplier.  Send the value using the BLE framework.  Also, set the background color of the view to that of the sent values
    func writeTheData() {
        buf[redPin] = UInt8(round(redSlider.value * brightness * 255))
        buf[greenPin] = UInt8(round(greenSlider.value * brightness * 255))
        buf[bluePin] = UInt8(round(blueSlider.value * brightness * 255))
        let dataToSend = NSData.init(bytes: buf, length: 7)
        myBLE.write(data: dataToSend)
        view.backgroundColor = UIColor(red: CGFloat(redSlider.value * brightness), green: CGFloat(greenSlider.value * brightness), blue: CGFloat(blueSlider.value * brightness), alpha: 1.0)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        //Set the initial values for the sliders
        redSlider.value = 0.5
        greenSlider.value = 0.5
        blueSlider.value = 0.5

        //Style the sliders, making their min track values the same as that of the color it is representing
        redSlider.minimumTrackTintColor = UIColor.redColor()
        greenSlider.minimumTrackTintColor = UIColor.greenColor()
        blueSlider.minimumTrackTintColor = UIColor.blueColor()

        //Setting the background color to the initial values of our sliders
        view.backgroundColor = UIColor(red: 127.0/255.0, green: 127.0/255.0, blue: 127.0/255.0, alpha: 1.0)

        myBLE.read()
    }
`;

code5 = `
class scanTableViewController: UITableViewController {
   //Show a spinner if still scanning 
    @IBOutlet weak var mySpinner: UIActivityIndicatorView!

    override func viewDidLoad() {
        super.viewDidLoad()
        
	//If the table is empty, scan again and show spinner so user knows the phone is still looking
        if myBLE.peripherals.count == 0 {
            mySpinner.startAnimating()
            recheckForBLE()
        } else {
	    //Yea! their is something to connect to, hide the spinner
            mySpinner.stopAnimating()
        }
    }

    //If there are no devices found yet, try again
    func recheckForBLE() {
        while myBLE.peripherals.count == 0 {
            NSTimer.scheduledTimerWithTimeInterval(3.0, target: self, selector: #selector(self.refreshTable), userInfo: nil, repeats: false)
        }
        mySpinner.stopAnimating()
    }

    //Refresh the table if devices finally found
    func refreshTable() {
        self.tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    // MARK: - Table view data source
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        // Only one section needed for our simple table
        return 1
    }

    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        //Show however many devices the framework detects
        return myBLE.peripherals.count
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCellWithIdentifier("cell", forIndexPath: indexPath)
        //Show the human readable device name as main text and as a sub text show the UUID just because
        cell.textLabel?.text = myBLE.peripherals[indexPath.row].name
        cell.detailTextLabel?.text = "\(myBLE.peripherals[indexPath.row].identifier)"
        return cell
    }
    
//On selection connect to the device
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        myBLE.connectToPeripheral(myBLE.peripherals[indexPath.row])
    }
} 
`;
}

	 
