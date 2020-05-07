//
//  ContactView.swift
//  karen-mobile
//
//  Created by Dylan Dunn on 4/18/20.
//  Copyright © 2020 Dylan Dunn. All rights reserved.
//

import SwiftUI
import URLImage

struct ContactsView: View {
    @State public var query = ""
    
    var body: some View {
        VStack {
            SearchBar(text: $query)
            List {
                NavigationLink(destination: ContactView()) {
                    HStack(spacing: 12) {
                        URLImage(URL(string: "https://via.placeholder.com/64")!)
                        .frame(width: 64, height: 64)
                        Text("John Doe")
                        Spacer()
                    }
                }
            }
            .navigationBarTitle("Contacts")
            .navigationBarItems(trailing:
                Button(action: {
                    print("")
                }) {
                    Image(systemName: "plus")
            })
        }
    }
}

struct ContactsView_Previews: PreviewProvider {
    static var previews: some View {
        ContactsView()
    }
}
