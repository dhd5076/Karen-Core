//
//  ContactView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/6/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import Messages
import MessageUI

struct  ContactView: View {
    var body: some View  {
        VStack {
            Circle()
                .strokeBorder(lineWidth: 12.0)
                .frame(width: 128, height:128)
            Text("John Doe")
                .font(.title)
            List {
                Button(action: viewInstagram) {
                    Text("View Instagram")
                }
                .foregroundColor(.blue)
            Button(action: sendMessage) {
                Text("Send Message")
            }
            .foregroundColor(.blue)
            }
        }
        .navigationBarTitle("Joe Doe")
        .navigationBarItems(trailing:
            Button(action: {
                print("")
            }) {
                Image(systemName: "plus")
        })
    }
    
    func viewInstagram() {
        UIApplication.shared.open(URL(string: "https://instagram.com/dhd5076")!)
    }
    
    func sendMessage() {
        UIApplication.shared.open(URL(string: "sms:3155294032")!)
    }
    
}

struct ContactView_Previews: PreviewProvider {
    static var previews: some View {
        ContactView()
    }
}
