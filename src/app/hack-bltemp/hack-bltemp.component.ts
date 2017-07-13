import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hack-bltemp',
  templateUrl: './hack-bltemp.component.html',
  styleUrls: ['./hack-bltemp.component.css'],
})
export class HackBLTempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code1 = `
  #include <SPI.h>
            #include <EEPROM.h>
            #include <boards.h>
            #include <RBL_nRF8001.h>
            
            const int tempPin = A0;
            
            void setup() {
                // put your setup code here, to run once:
                Serial.begin(9600);
                            
                pinMode(tempPin, INPUT);
            
                // Set your BLE Shield name here, max. length 10
                ble_set_name("Thermostat");
                            
                // Init. and start BLE library.
                ble_begin();
                            
            }
                            
            void loop() {
                // put your main code here, to run repeatedly:
                
                if(ble_connected()){
                    Serial.print(" BLE connected ");
                } else {
                    Serial.print(" [ERROR] BLE NOT connected ");
                }
                while(ble_connected()){
                    Serial.print(" BLE is available ");
                    // Read analog value from temperature sensor
                    int tempAnalog = analogRead(tempPin);
                    Serial.println(tempAnalog);
                    // Map the analog input to the Cecius temperature range per the sensor's data sheet
                    float tempValue = ((tempAnalog/1024.0) * 5.0 - 0.5) * 100.0;
                    // Capture the float with only 2 decimals as a string
                    String tempString = String(tempValue, 2);
                    // Print to serial for debug check
                    Serial.println(tempString);
                    // Create a character array to be filled with temperature string.
                    char buffer[5];
                    // Fill up the buffer with the temperature string.
                    tempString.toCharArray(buffer, 5);
                    // Send temperature value to BLE to broadcast
                    for(int x = 0; x < 5; x++) {
                        ble_write(tempString[x]);
                    }
                    // wait one second to pace communication / power saving
                    delay(1000);
                    //Send the 'write' actions.
                    ble_do_events();
                }
                
            }
  `;

code2 = `
func peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: Error?)
`;

code3 = `
if let str = String(data: characteristic.value!, encoding: String.Encoding.utf8) {
        print(str)
        tempValue = str
        } else {
        print("not a valid UTF-8 sequence")
        }
        NotificationCenter.default.post(name: Notification.Name(rawValue: "refresh"), object: nil, userInfo: nil)
`;

code4 = `
import UIKit
            
            let myBLE = BLE()
            
            class ViewController: UIViewController {

                @IBOutlet weak var tempValue: UILabel!
                var delivTemp: Int = 0
            
                override func viewDidLoad() {
                    super.viewDidLoad()
                    // Do any additional setup after loading the view, typically from a nib.
                    myBLE.read()
                    tempValue.text = "waiting"
                    NotificationCenter.default.addObserver(self, selector: #selector(ViewController.newTemp(_:)), name: NSNotification.Name(rawValue: "refresh"), object: nil)
                    }
            
                func newTemp(_ notification: Notification) {
                    //Check value in log for debuging
                    print(" value to VC: \(myBLE.tempValue)")
                    tempValue.text = myBLE.tempValue
                    tempValue.reloadInputViews()
                }
            
                override func didReceiveMemoryWarning() {
                    super.didReceiveMemoryWarning()
                    // Dispose of any resources that can be recreated.
                }
            }
`;
}
