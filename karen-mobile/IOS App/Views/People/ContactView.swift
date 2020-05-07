//
//  ContactView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 5/6/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
#if !targetEnvironment(macCatalyst)
import Messages
#endif
import MessageUI
import URLImage

struct  ContactView: View {
    var body: some View  {
        VStack {
            URLImage(URL(string: "https://via.placeholder.com/128")!)          .frame(width: 128, height:128)
                .clipShape(Circle())
                .overlay(Circle().stroke(Color.black, lineWidth: 1))
            Text("John Doe")
                .font(.title)
            Text("Friend")
                .font(.caption)
            List {
                Button(action: viewInstagram) {
                    Text("View Instagram")
                }
                    .foregroundColor(.blue)
                Button(action: sendMessage) {
                    Text("Send Message")
                }
                    .foregroundColor(.blue)
                HStack {
                    Text("Phone Number")
                    Spacer()
                    Text("315-529-4032")
                }
            }
        }
        .navigationBarItems(trailing:
            Button("Edit") {
                print("Edit Contact")
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
