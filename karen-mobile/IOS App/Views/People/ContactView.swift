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
    @State public var description : String = "Hello World"
    @State private var selectedStrength = 0
    
    var strengths = ["Mild", "Medium", "Mature"]
    
    var body: some View  {
        VStack {
            URLImage(URL(string: "https://via.placeholder.com/96")!)          .frame(width: 96, height:96)
                .clipShape(Circle())
                .overlay(Circle().stroke(Color.black, lineWidth: 1))
            Text("John Doe")
                .font(.title)
            Text("Friend")
                .font(.caption)
            List {
                Section(header: Text("Contact Information")) {
                    HStack {
                        Text("Phone Number")
                        Spacer()
                        Text("315-529-4032")
                    }
                }
                Section(header: Text("Platforms")) {
                    Button(action: viewInstagram) {
                        Text("View Instagram")
                    }
                        .foregroundColor(.blue)
                    Button(action: sendMessage) {
                        Text("Send Message")
                    }
                        .foregroundColor(.blue)
                }
                Section(header: Text("Other")) {
                    NavigationLink(destination: ContactView()) {
                        Text("Additional Data")
                    }
                }
            }
            .listStyle(GroupedListStyle())
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
