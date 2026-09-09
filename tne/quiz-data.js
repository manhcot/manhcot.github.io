const QUIZ_DATA = {
  weeks: [
    {
      week: 1,
      title: "Week 1",
      modules: [
        {
          id: 1,
          title: "Module 1: Securing Networks",
          objective: "Explain network security.",
          questions: [
            {
              type: "mcq",
              question: "What is an attack vector?",
              options: [
                "A path by which a threat actor can gain access to a server, host, or network",
                "A type of malware that spreads through email",
                "A security protocol used to encrypt network traffic",
                "A hardware device that blocks unauthorized access"
              ],
              answer: 0,
              explanation: "An attack vector is a path by which a threat actor can gain access to a server, host, or network. Attack vectors originate from inside or outside the corporate network. Threat actors may target a network through the internet to disrupt network operations and create a denial of service (DoS) attack."
            },
            {
              type: "mcq",
              question: "What does BYOD stand for in network security?",
              options: [
                "Bring Your Own Database",
                "Bring Your Own Device",
                "Backup Your Own Data",
                "Build Your Own Defense"
              ],
              answer: 1,
              explanation: "BYOD stands for Bring Your Own Device. Smartphones, tablets, etc. are becoming substitutes for the office PC behind a firewall. To accommodate this, Cisco developed the Borderless Network where access to resources can be initiated by users from many locations, on many types of end devices, using various connectivity methods."
            },
            {
              type: "mcq",
              question: "Which of the following are VM-specific targeted attacks?",
              options: [
                "Hyperjacking, Instant On Activation, Antivirus Storms",
                "Phishing, Spear Phishing, Baiting",
                "Ping sweeps, Port scans, Vulnerability scanning",
                "Spoofing, Sniffing, Smurfing"
              ],
              answer: 0,
              explanation: "Virtual Machines (VMs) are prone to three specific targeted attacks: (1) Hyperjacking - an attacker hijacks a VM hypervisor and uses it as a launch point to attack other devices; (2) Instant On Activation - when a VM that hasn't been used is brought online, it may have outdated security policies; (3) Antivirus Storms - when all VMs attempt to download antivirus data files at the same time."
            },
            {
              type: "mcq",
              question: "What is the role of the Cisco PSIRT team?",
              options: [
                "To manage network traffic routing",
                "To provide wireless encryption",
                "To investigate and mitigate potential vulnerabilities in Cisco products",
                "To monitor employee internet usage"
              ],
              answer: 2,
              explanation: "The Cisco Product Security Incident Response Team (PSIRT) is responsible for investigating and mitigating potential vulnerabilities in Cisco products. The Cisco Talos Intelligence Group website provides comprehensive security and threat intelligence."
            },
            {
              type: "mcq",
              question: "Data center physical security is divided into which two areas?",
              options: [
                "Front door and back door security",
                "Network and server security",
                "Outside perimeter and inside perimeter security",
                "Physical and logical security"
              ],
              answer: 2,
              explanation: "Data center physical security is divided into two areas: (1) Outside perimeter security - includes on-premise security officers, fences, gates, continuous video surveillance, and security breach alarms; (2) Inside perimeter security - includes continuous video surveillance, electronic motion detectors, security traps, and biometric access and exit sensors."
            },
            {
              type: "fill",
              question: "______ is the foundation of cloud computing. Without it, cloud computing would not be possible.",
              answer: "Virtualization",
              explanation: "Virtualization is the foundation of cloud computing. Cloud computing separates the application from the hardware, while virtualization separates the operating system from the hardware. The cloud network consists of physical and virtual servers usually found in data centers."
            },
            {
              type: "fill",
              question: "Enforcing a ______ lock is the first and most effective step in preventing unauthorized access to a mobile device.",
              answer: "PIN",
              explanation: "PIN Enforcement is one of the Mobile Device Management (MDM) features supported by Cisco devices. Enforcing a PIN lock is the first and most effective step in preventing unauthorized access to a device. Other MDM features include Data Encryption, Data Wipe, Data Loss Prevention (DLP), and Jailbreak/Root Detection."
            },
            {
              type: "fill",
              question: "______ prevents authorized users from doing careless or malicious things with critical data.",
              answer: "DLP",
              explanation: "DLP (Data Loss Prevention) is an MDM feature that prevents authorized users from doing careless or malicious things with critical data. It is one of several MDM features that help secure mobile devices in a Borderless Network environment."
            }
          ]
        },
        {
          id: 2,
          title: "Module 2: Network Threats",
          objective: "Explain the various types of threats and attacks.",
          questions: [
            {
              type: "mcq",
              question: "What are the three most common types of malware?",
              options: [
                "Spyware, Adware, Ransomware",
                "Virus, Worm, Trojan horse",
                "Rootkit, Keylogger, Backdoor",
                "Botnet, Zombie, Spam"
              ],
              answer: 1,
              explanation: "The three most common types of malware are: (1) Virus - spreads by inserting a copy of itself into another program and requires human help to spread; (2) Worm - replicates itself by independently exploiting vulnerabilities in networks; (3) Trojan horse - software that appears legitimate but contains malicious code exploiting the privileges of the user who runs it."
            },
            {
              type: "mcq",
              question: "What is ransomware?",
              options: [
                "Malware that spies on user activity",
                "Malware that denies access to the infected system and demands payment",
                "Malware that spreads through network shares",
                "Malware that corrupts database files"
              ],
              answer: 1,
              explanation: "Ransomware is malware that denies access to the infected computer system or its data. The cybercriminals then demand payment to release the computer system. It is currently the most dominant malware type and has evolved to become the most profitable malware type in history. Payments are typically made in Bitcoin for anonymity."
            },
            {
              type: "mcq",
              question: "What are the three major categories of network attacks?",
              options: [
                "Reconnaissance, Access, and DoS Attacks",
                "Internal, External, and Hybrid Attacks",
                "Physical, Network, and Social Attacks",
                "Active, Passive, and Covert Attacks"
              ],
              answer: 0,
              explanation: "The course classifies network attacks into three major categories: (1) Reconnaissance Attacks - information gathering and unauthorized discovery of systems, services, or vulnerabilities; (2) Access Attacks - exploit known vulnerabilities in authentication, FTP, and web services to gain entry; (3) DoS Attacks - create interruption of network services to users, devices, or applications."
            },
            {
              type: "mcq",
              question: "What is the key difference between a virus and a worm?",
              options: [
                "Viruses are more dangerous than worms",
                "Viruses require a host program to run; worms can run themselves",
                "Worms only target email systems",
                "Viruses spread faster than worms"
              ],
              answer: 1,
              explanation: "Worms are similar to viruses because they replicate and can cause the same type of damage. However, viruses require a host program to run, while worms can run themselves. Worms replicate by independently exploiting vulnerabilities in networks. For example, SQL Slammer infected 250,000+ hosts within 30 minutes."
            },
            {
              type: "mcq",
              question: "What does DDoS stand for and how does it differ from DoS?",
              options: [
                "Direct Denial of Service - it targets specific servers",
                "Distributed Denial of Service - it originates from multiple coordinated sources",
                "Delayed Denial of Service - it activates after a delay",
                "Dynamic Denial of Service - it changes attack patterns"
              ],
              answer: 1,
              explanation: "A Distributed Denial of Service (DDoS) attack is similar to a DoS attack in intent, but increases in magnitude because it originates from multiple, coordinated sources. Components of DDoS attacks include zombies, bots, botnets, handlers, and botmasters. The Mirai Botnet is an example of a DDoS attack."
            },
            {
              type: "mcq",
              question: "What are Indicators of Compromise (IOC)?",
              options: [
                "Evidence that an attack has occurred",
                "Types of firewall rules",
                "Network performance metrics",
                "Encryption algorithms"
              ],
              answer: 0,
              explanation: "Indicators of Compromise (IOC) are the evidence that an attack has occurred. IOCs can include malware files, IP addresses of servers used in attacks, filenames, and characteristic changes made to end system software. Indicators of Attack (IOA) focus more on the motivation behind an attack and the strategies used by attackers."
            },
            {
              type: "fill",
              question: "______ ______ is an access attack that attempts to manipulate individuals into performing actions or divulging confidential information.",
              answer: "Social engineering",
              explanation: "Social engineering is an access attack that attempts to manipulate individuals into performing actions or divulging confidential information. Techniques include pretexting, phishing, spear phishing, spam, baiting, impersonation, tailgating, shoulder surfing, and dumpster diving. The weakest link in cybersecurity is often personnel, making security-aware culture essential."
            },
            {
              type: "fill",
              question: "The four common ways to manage risk are risk acceptance, risk avoidance, risk reduction, and risk ______.",
              answer: "transfer",
              explanation: "Four common ways to manage risk are: (1) Risk acceptance - accepting the potential consequences; (2) Risk avoidance - avoiding activities that introduce risk; (3) Risk reduction - implementing measures to reduce risk; (4) Risk transfer - transferring risk to a third party, such as through insurance."
            },
            {
              type: "fill",
              question: "Most worm attacks consist of three components: enabling vulnerability, propagation mechanism, and ______.",
              answer: "payload",
              explanation: "Most worm attacks consist of three components: (1) Enabling vulnerability - a worm installs itself using an exploit mechanism on a vulnerable system; (2) Propagation mechanism - after gaining access, the worm replicates itself and locates new targets; (3) Payload - any malicious code that results in some action, often used to create a backdoor or DoS attack."
            },
            {
              type: "mcq",
              question: "Which types of hackers are commonly referenced in cybersecurity?",
              options: [
                "Red hat, Blue hat, Green hat",
                "White hat, Gray hat, Black hat",
                "Top hat, Flat hat, Cap hat",
                "Alpha, Beta, Gamma hackers"
              ],
              answer: 1,
              explanation: "White hat hackers are ethical security researchers who find vulnerabilities to fix them. Gray hat hackers operate between ethical and unethical boundaries. Black hat hackers are malicious threat actors who exploit systems for personal gain. The term 'hacker' has multiple meanings including clever programmers, network security professionals, and unauthorized access seekers."
            },
            {
              type: "mcq",
              question: "What are some evasion methods used by threat actors?",
              options: [
                "Encryption, tunneling, traffic fragmentation, and resource exhaustion",
                "Ping sweeps, port scans, and vulnerability scanning",
                "Password cracking, brute force, and dictionary attacks",
                "Phishing, pretexting, and baiting"
              ],
              answer: 0,
              explanation: "Evasion methods used by threat actors include: (1) Encrypting and tunneling - hiding malicious traffic inside encrypted tunnels; (2) Resource exhaustion - overwhelming security devices to bypass inspections; (3) Traffic fragmentation - splitting packets to avoid signature detection; (4) And other techniques to evade detection by security devices like IPS and firewalls."
            }
          ]
        },
        {
          id: 3,
          title: "Module 3: Mitigating Threats",
          objective: "Explain tools and procedures to mitigate the effects of malware and common network attacks.",
          questions: [
            {
              type: "mcq",
              question: "What does the CIA Triad stand for in information security?",
              options: [
                "Central Intelligence Agency",
                "Confidentiality, Integrity, Availability",
                "Control, Inspection, Authentication",
                "Cryptography, Identity, Access"
              ],
              answer: 1,
              explanation: "The CIA Triad consists of three components of information security: (1) Confidentiality - only authorized individuals, entities, or processes can access sensitive information; (2) Integrity - protection of data from unauthorized alteration; (3) Availability - authorized users must have uninterrupted access to network resources and data they require."
            },
            {
              type: "mcq",
              question: "What are the three functional areas of the Cisco NFP framework?",
              options: [
                "Input, Processing, Output",
                "Control plane, Management plane, Data plane",
                "Hardware, Software, Network",
                "Internal, External, Perimeter"
              ],
              answer: 1,
              explanation: "The Cisco Network Foundation Protection (NFP) framework logically divides routers and switches into three functional areas: (1) Control plane - responsible for routing data correctly; (2) Management plane - responsible for managing network elements; (3) Data plane - responsible for forwarding data. CoPP (Control Plane Policing) is a key security feature for the control plane."
            },
            {
              type: "mcq",
              question: "What is the 'Security Onion' analogy used for?",
              options: [
                "A network monitoring tool",
                "Describing defense-in-depth where a threat actor must peel away layers of defense",
                "A type of encryption algorithm",
                "A method for organizing security policies"
              ],
              answer: 1,
              explanation: "The 'Security Onion' is a common analogy used to describe a defense-in-depth approach. A threat actor would have to peel away at a network's defenses layer by layer, similar to peeling an onion. Only after penetrating each layer would the threat actor reach the target. The evolving network border has changed this to the 'Security Artichoke' where threat actors only need to remove certain 'leaves' to reach the heart."
            },
            {
              type: "mcq",
              question: "Which Layer 2 security tools are integrated into Cisco Catalyst switches?",
              options: [
                "Port security, DHCP snooping, Dynamic ARP Inspection, IP Source Guard",
                "Firewall, IPS, VPN, AAA",
                "SSH, SNMP, NTP, Syslog",
                "ACLs, NAT, PAT, QoS"
              ],
              answer: 0,
              explanation: "Cisco Catalyst switches integrate several Layer 2 security tools: (1) Port security - restricts input to an interface; (2) DHCP snooping - filters untrusted DHCP messages; (3) Dynamic ARP Inspection (DAI) - validates ARP packets; (4) IP Source Guard - restricts IP traffic on non-routed interfaces."
            },
            {
              type: "mcq",
              question: "What are the four phases of worm mitigation?",
              options: [
                "Detection, Analysis, Response, Recovery",
                "Containment, Inoculation, Quarantine, Treatment",
                "Prevention, Detection, Eradication, Restoration",
                "Scanning, Patching, Cleaning, Monitoring"
              ],
              answer: 1,
              explanation: "The response to a worm attack can be broken down into four phases: (1) Containment - limiting the spread of the worm; (2) Inoculation - applying patches and updates; (3) Quarantine - isolating infected systems; (4) Treatment - cleaning and restoring infected systems."
            },
            {
              type: "fill",
              question: "Use the ______ ______ command to encrypt all plaintext passwords on a Cisco router.",
              answer: "service password-encryption",
              explanation: "The 'service password-encryption' global configuration command encrypts all plaintext passwords on a Cisco router. This prevents unauthorized individuals from viewing plaintext passwords in the configuration file. Use 'show running-config' to verify that passwords are now encrypted."
            },
            {
              type: "fill",
              question: "______ is a Cisco IOS feature that lets users control the flow of traffic handled by the route processor of a network device.",
              answer: "CoPP",
              explanation: "Control Plane Policing (CoPP) is a Cisco IOS feature that lets users control the flow of traffic that is handled by the route processor of a network device. CoPP is designed to prevent unnecessary traffic from overwhelming the route processor. It treats the control plane as a separate entity with its own ingress and egress ports."
            },
            {
              type: "fill",
              question: "There are ______ network security domains specified by the ISO/IEC.",
              answer: "14",
              explanation: "There are 14 network security domains specified by the International Organization for Standardization (ISO)/International Electrotechnical Commission (IEC). These domains serve as a common basis for developing organizational security standards."
            },
            {
              type: "mcq",
              question: "What is Cisco Talos Threat Intelligence Group?",
              options: [
                "A firewall appliance manufacturer",
                "One of the largest commercial threat intelligence teams in the world",
                "A network monitoring protocol",
                "A type of encryption algorithm"
              ],
              answer: 1,
              explanation: "Cisco Talos is one of the largest commercial threat intelligence teams in the world. The goal of Talos is to help protect enterprise users, data, and infrastructure from active adversaries. Talos collects information about active, existing, and emerging threats and provides comprehensive protection to subscribers. Cisco Security products use Talos threat intelligence in real time."
            },
            {
              type: "mcq",
              question: "Which antispoofing technologies are supported by Cisco routers and switches to mitigate DoS attacks?",
              options: [
                "Port security, DHCP snooping, IP Source Guard, Dynamic ARP Inspection, and ACLs",
                "SSH, SNMP, NTP, and Syslog",
                "MD5, SHA, AES, and DES",
                "VPN, IPSec, TLS, and SSL"
              ],
              answer: 0,
              explanation: "Historically, many DoS attacks were sourced from spoofed addresses. Cisco routers and switches support antispoofing technologies including: (1) Port security; (2) DHCP snooping; (3) IP Source Guard; (4) Dynamic ARP Inspection (DAI); (5) Access Control Lists (ACLs). These help prevent attackers from spoofing source IP addresses."
            }
          ]
        }
      ]
    },
    {
      week: 2,
      title: "Week 2",
      modules: [
        {
          id: 4,
          title: "Module 4: Secure Device Access",
          objective: "Configure secure administrative devices.",
          questions: [
            {
              type: "mcq",
              question: "What is the edge router?",
              options: [
                "A router that connects to the internet only",
                "The last router between the internal network and an untrusted network",
                "A router used for internal routing only",
                "A router that manages wireless connections"
              ],
              answer: 1,
              explanation: "The edge router is the last router between the internal network and an untrusted network, such as the internet. All of an organization's internet traffic goes through an edge router, which often functions as the first and last line of defense for a network. Three approaches include: Single Router, Defense-in-Depth, and DMZ."
            },
            {
              type: "mcq",
              question: "What are the three areas of router security that must be maintained?",
              options: [
                "Physical, Operating System, Router Hardening",
                "Internal, External, Perimeter",
                "Hardware, Software, Firmware",
                "Access, Authentication, Accounting"
              ],
              answer: 0,
              explanation: "Three areas of router security must be maintained: (1) Physical - place the router in a secure locked room, install UPS; (2) Operating System - configure with maximum memory, use the latest stable OS version, keep secure backups; (3) Router Hardening - ensure only authorized personnel have access, disable unused ports and interfaces, disable unnecessary services."
            },
            {
              type: "mcq",
              question: "How many steps are required to configure SSH on a Cisco device?",
              options: ["4 steps", "5 steps", "6 steps", "8 steps"],
              answer: 2,
              explanation: "There are 6 steps to configure SSH on a Cisco device: (1) Configure a unique device hostname; (2) Configure the IP domain name; (3) Generate a key to encrypt SSH traffic; (4) Verify or create a local database entry; (5) Authenticate against the local database; (6) Enable vty inbound SSH sessions."
            },
            {
              type: "mcq",
              question: "Which command is recommended for encrypting the enable secret password using stronger encryption than MD5?",
              options: [
                "service password-encryption",
                "enable algorithm-type scrypt secret",
                "password-encryption aes",
                "encrypt enable secret"
              ],
              answer: 1,
              explanation: "MD5 hashes are no longer considered secure. It is now recommended to configure all secret passwords using either type 8 (PBKDF2) or type 9 (SCRYPT) passwords, introduced in Cisco IOS 15.3(3)M. Use 'enable algorithm-type scrypt secret' for type 9 or 'enable algorithm-type sha256 secret' for type 8."
            },
            {
              type: "mcq",
              question: "What are the two modes of the login block-for command?",
              options: [
                "Active mode and Passive mode",
                "Normal mode and Quiet mode",
                "Open mode and Closed mode",
                "Fast mode and Slow mode"
              ],
              answer: 1,
              explanation: "The login block-for command operates in two modes: (1) Normal mode (watch mode) - the router keeps count of failed login attempts within an identified time period; (2) Quiet mode (quiet period) - if failed logins exceed the configured threshold, all login attempts using Telnet, SSH, and HTTP are denied for the time specified."
            },
            {
              type: "fill",
              question: "Use the ______ ______ command to defend against DoS attacks by disabling logins after a specified number of failed login attempts.",
              answer: "login block-for",
              explanation: "The 'login block-for' command defends against DoS attacks by disabling logins after a specified number of failed login attempts. It must be issued before any other login command. The 'login quiet-mode' command maps to an ACL for permitted hosts, and 'login delay' specifies seconds between unsuccessful attempts."
            },
            {
              type: "fill",
              question: "Use the ______ command to verify SSH settings on a Cisco router.",
              answer: "show ip ssh",
              explanation: "Use 'show ip ssh' to verify optional SSH command settings. Use 'ip ssh time-out seconds' to modify the default 120-second timeout interval. Use 'ip ssh authentication-retries integer' to configure the number of consecutive SSH retries (default is 3). Use 'show ssh' to verify client connections."
            },
            {
              type: "fill",
              question: "The DMZ can be set up between two routers, with an ______ router connecting to the protected network and an ______ router connecting to the unprotected network.",
              answer: "internal external",
              explanation: "The DMZ (Demilitarized Zone) can be used for servers that must be accessible from the internet. The DMZ is set up between two routers: an internal router connecting to the protected network and an external router connecting to the unprotected network. This isolates public-facing servers from the internal network."
            },
            {
              type: "mcq",
              question: "What are the two methods of accessing a router for administrative purposes?",
              options: [
                "Wired and Wireless access",
                "Local access (console cable) and Remote access (Telnet, SSH, HTTP, HTTPS, SNMP)",
                "Direct and Indirect access",
                "Physical and Virtual access"
              ],
              answer: 1,
              explanation: "A router can be accessed locally or remotely: (1) Local access - the administrator must have physical access and use a console cable to connect to the console port, typically used for initial configuration; (2) Remote access - involves allowing Telnet, SSH, HTTP, HTTPS, or SNMP connections from a computer on the local or remote network."
            },
            {
              type: "mcq",
              question: "Which command ensures all configured passwords are a minimum of a specified length?",
              options: [
                "password min-length length",
                "security passwords min-length length",
                "enable password length",
                "service password-length"
              ],
              answer: 1,
              explanation: "Use 'security passwords min-length length' in global configuration mode to ensure all configured passwords meet a minimum length requirement. This helps enforce strong password policies. Combined with 'service password-encryption' to encrypt plaintext passwords and 'login block-for' to deter brute-force attacks."
            },
            {
              type: "fill",
              question: "Use the ______ ______ command to generate a log message when the login failure rate is exceeded.",
              answer: "security authentication failure rate",
              explanation: "The 'security authentication failure rate' command generates a log message when the login failure rate is exceeded. Other login enhancement commands include 'login on-success log' and 'login on-failure log' to generate syslog messages. Use 'show login' to verify login block-for settings and 'show login failures' to see failed attempt details."
            }
          ]
        },
        {
          id: 5,
          title: "Module 5: Assigning Administrative Roles",
          objective: "Configure command authorization using privilege levels and role-based CLI.",
          questions: [
            {
              type: "mcq",
              question: "How many privilege levels exist in Cisco IOS software?",
              options: ["2", "8", "16", "32"],
              answer: 2,
              explanation: "There are 16 privilege levels in total in Cisco IOS software. By default, there are two levels: User EXEC mode (privilege level 1) and Privileged EXEC mode (privilege level 15). The higher the privilege level, the more router access a user has. Custom privilege levels (2-14) can be configured using the 'privilege' command."
            },
            {
              type: "mcq",
              question: "What are the three types of role-based CLI views?",
              options: [
                "Root View, CLI View, Superview",
                "Admin View, User View, Guest View",
                "Global View, Local View, Remote View",
                "Master View, Slave View, Backup View"
              ],
              answer: 0,
              explanation: "Role-based CLI provides three types of views: (1) Root View - has level 15 privileges and can configure or modify views; (2) CLI View - a specific set of commands bundled into a view; (3) Superview - consists of one or more CLI views. Users in a superview can access all commands configured for any CLI views that are part of the superview."
            },
            {
              type: "mcq",
              question: "Which command is used to create a view in role-based CLI?",
              options: [
                "create view view-name",
                "parser view view-name",
                "role view view-name",
                "aaa view view-name"
              ],
              answer: 1,
              explanation: "Use the 'parser view view-name' global configuration mode command to create a view. This enables view configuration mode. Before creating views, AAA must be enabled with 'aaa new-model' and you must enter root view with 'enable view'. Assign a secret password with 'secret password' and commands with 'commands parser-mode'."
            },
            {
              type: "mcq",
              question: "Which of the following is a limitation of privilege levels?",
              options: [
                "They cannot be customized",
                "There is no access control to specific interfaces, ports, or slots",
                "They require an external server",
                "They only work with SSH"
              ],
              answer: 1,
              explanation: "Limitations of privilege levels include: (1) No access control to specific interfaces, ports, logical interfaces, and slots; (2) Commands at lower privilege levels are always executable at higher levels; (3) Commands set at higher levels are not available to lower privileged users; (4) Assigning a command with multiple keywords allows access to all commands using those keywords."
            },
            {
              type: "fill",
              question: "To enable AAA on a Cisco device, use the ______ command in global configuration mode.",
              answer: "aaa new-model",
              explanation: "The 'aaa new-model' command enables AAA globally on the device. This is a prerequisite for configuring role-based CLI views. After enabling AAA, enter root view with 'enable view' command, then create views with 'parser view view-name'."
            },
            {
              type: "fill",
              question: "A ______ consists of one or more CLI views and allows a network administrator to combine multiple views together.",
              answer: "Superview",
              explanation: "A Superview consists of one or more CLI views. Key characteristics: a single CLI view can be shared within multiple superviews; commands cannot be configured directly for a superview (must add commands to CLI views first); each superview has a password; deleting a superview does not delete the associated CLI views."
            },
            {
              type: "fill",
              question: "By default, User EXEC mode is privilege level ______ and Privileged EXEC mode is privilege level ______.",
              answer: "1 15",
              explanation: "By default, the Cisco IOS software CLI has two levels of access: User EXEC mode (privilege level 1) and Privileged EXEC mode (privilege level 15). There are 16 privilege levels in total (0-15). Custom levels can be assigned using 'privilege exec level level [command]'."
            },
            {
              type: "mcq",
              question: "Which command is used to assign commands to a role-based CLI view?",
              options: [
                "assign command view-name",
                "commands parser-mode {include | include-exclusive | exclude} [all] [command]",
                "add command to view",
                "set commands view-name"
              ],
              answer: 1,
              explanation: "Use 'commands parser-mode {include | include-exclusive | exclude} [all] [interface interface-name | command]' in view configuration mode to assign commands to a view. 'include' shares the command with other views, 'include-exclusive' reserves the command for this view only, and 'exclude' removes the command from the view."
            },
            {
              type: "mcq",
              question: "How do you verify role-based CLI views?",
              options: [
                "Use 'show views' command",
                "Use 'enable view view-name' to log into the view and use '?' to verify available commands",
                "Use 'display parser view' command",
                "Use 'show running-config view'"
              ],
              answer: 1,
              explanation: "To verify a view, use 'enable view view-name' and provide the password. Use the '?' command to verify available commands. From root view, use 'show parser view all' to see a summary of all views. This confirms which commands are accessible to each configured view."
            }
          ]
        }
      ]
    },
    {
      week: 3,
      title: "Week 3",
      modules: [
        {
          id: 6,
          title: "Module 6: Device Monitoring and Management",
          objective: "Implement the secure management and monitoring of network devices.",
          questions: [
            {
              type: "mcq",
              question: "What is the Cisco IOS Resilient Configuration Feature?",
              options: [
                "A feature that automatically backs up configurations to the cloud",
                "A feature that maintains a secure working copy of the IOS image and running configuration",
                "A feature that encrypts all configuration files",
                "A feature that prevents unauthorized console access"
              ],
              answer: 1,
              explanation: "The Cisco IOS Resilient Configuration Feature allows for faster recovery if someone maliciously or unintentionally reformats flash memory or erases the startup configuration. It maintains a secure working copy of the router IOS image file and running configuration (called the primary bootset) that cannot be removed by the user. It can only be disabled through a console session."
            },
            {
              type: "mcq",
              question: "What does NTP stand for and what is its purpose?",
              options: [
                "Network Transfer Protocol - for file transfers",
                "Network Time Protocol - synchronizes time across network devices",
                "Network Traffic Policy - manages bandwidth",
                "Network Test Protocol - tests connectivity"
              ],
              answer: 1,
              explanation: "NTP (Network Time Protocol) synchronizes the time of day among a set of distributed time servers and clients. NTP uses a hierarchical system of time sources arranged in strata. Stratum 0 is the most authoritative time source (atomic or GPS clocks). The lower the stratum number, the closer the source is to the authoritative source."
            },
            {
              type: "mcq",
              question: "What are the three elements of the SNMP system?",
              options: [
                "SNMP manager, SNMP agent, MIB",
                "SNMP server, SNMP client, Database",
                "SNMP router, SNMP switch, Firewall",
                "SNMP collector, SNMP reporter, Log"
              ],
              answer: 0,
              explanation: "The SNMP system consists of three elements: (1) SNMP manager - part of a Network Management System (NMS), runs SNMP management software; (2) SNMP agents (managed node) - network devices equipped with SNMP agent software; (3) Management Information Base (MIB) - organizes variables hierarchically using Object IDs (OIDs)."
            },
            {
              type: "mcq",
              question: "Which SNMP version provides secure access through authentication and encryption?",
              options: ["SNMPv1", "SNMPv2c", "SNMPv3", "SNMPv4"],
              answer: 2,
              explanation: "SNMPv3 provides secure access to devices by authenticating and encrypting packets over the network. It includes: (1) Message integrity - ensures packet was not tampered with; (2) Authentication - determines message is from a valid source; (3) Encryption - prevents contents from being read by unauthorized sources; (4) Access control - restricts actions on specific data."
            },
            {
              type: "mcq",
              question: "What are the two types of management access paths?",
              options: [
                "Wired and Wireless",
                "In-band and Out-of-band",
                "Local and Remote",
                "Direct and Indirect"
              ],
              answer: 1,
              explanation: "Two management access paths: (1) In-band - information flows across the enterprise production network, internet, or both, using regular data channels. Use SSH instead of Telnet for security; (2) Out-of-band (OOB) - information flows on a dedicated management network with no production traffic. OOB provides the highest level of security."
            },
            {
              type: "mcq",
              question: "What is AutoSecure used for?",
              options: [
                "Automatically encrypts all network traffic",
                "Locks down management and forwarding plane functions of a router",
                "Automatically updates router firmware",
                "Blocks all incoming traffic by default"
              ],
              answer: 1,
              explanation: "AutoSecure can lock down the management plane functions and forwarding plane services of a router. Management plane services include securing BOOTP, CDP, FTP, TFTP, PAD, ICMP redirects, password encryption, SSH access, and more. Forwarding plane services include CEF, traffic filtering with ACLs, and IOS firewall inspection. AutoSecure should be used on new routers, not production routers."
            },
            {
              type: "fill",
              question: "Use the ______ command to secure the IOS image and enable Cisco IOS image resilience.",
              answer: "secure boot-image",
              explanation: "Use 'secure boot-image' global configuration mode command to secure the IOS image. Use 'secure boot-config' to securely archive the running configuration. Use 'show secure bootset' to verify the existence of the archive. The feature can only be disabled through a console session."
            },
            {
              type: "fill",
              question: "NTP uses a hierarchical system of time sources called ______.",
              answer: "stratum",
              explanation: "NTP uses a hierarchical system of time sources arranged in strata. Stratum 0 is the most authoritative time source using atomic or GPS clocks. Stratum 1 gets time from stratum 0, stratum 2 from stratum 1, and so on. The lower the stratum number, the closer to the authoritative source. Configure with 'ntp server ip-address'."
            },
            {
              type: "fill",
              question: "Syslog messages contain a severity level that can range from Level ______ to Level ______.",
              answer: "0 7",
              explanation: "Syslog messages contain a severity level ranging from Level 0 (Emergency - system is unusable) to Level 7 (Debug - debugging messages). The lower the level number, the higher the severity. Use 'service timestamps log datetime' to add timestamps to log messages."
            },
            {
              type: "mcq",
              question: "What does the SCP (Secure Copy Protocol) feature rely on for security?",
              options: [
                "TFTP and FTP for transfer",
                "SSH for secure communication and AAA for authentication and authorization",
                "HTTPS and SSL for encryption",
                "SNMP and NTP for monitoring"
              ],
              answer: 1,
              explanation: "SCP (Secure Copy Protocol) provides a secure and authenticated method for copying router configuration or image files. It relies on SSH to secure communication and AAA to provide authentication and authorization. To enable server-side SCP: configure SSH, create a local user with privilege level 15, enable AAA, and use 'ip scp server enable'."
            },
            {
              type: "mcq",
              question: "What does the 'no service password-recovery' command do?",
              options: [
                "Deletes all passwords on the router",
                "Prevents unauthorized password recovery by erasing startup config if the break sequence is used",
                "Encrypts all passwords with AES",
                "Disables the console port"
              ],
              answer: 1,
              explanation: "The 'no service password-recovery' command mitigates the risk of someone gaining physical access to a router and using the password recovery procedure. If the break sequence is initiated within 5 seconds after image decompression, the startup configuration is completely erased and the router boots with factory defaults. If not confirmed, the router boots normally."
            },
            {
              type: "mcq",
              question: "Why should CDP and LLDP be used with caution on edge devices?",
              options: [
                "They consume too much bandwidth",
                "They can reveal device information to attackers if not disabled on edge devices",
                "They are not compatible with modern routers",
                "They require special licensing"
              ],
              answer: 1,
              explanation: "CDP (Cisco Discovery Protocol) and LLDP (Link Layer Discovery Protocol) make it easier for administrators to discover and troubleshoot devices. However, because of security implications, these discovery protocols should be used with caution. Edge devices should have CDP/LLDP disabled because they expose device information to potential attackers on untrusted networks."
            },
            {
              type: "mcq",
              question: "Which routing protocol authentication methods are discussed for OSPF?",
              options: [
                "MD5 and SHA authentication",
                "AES and DES encryption",
                "RADIUS and TACACS+",
                "Kerberos and LDAP"
              ],
              answer: 0,
              explanation: "OSPF supports MD5 and SHA authentication. MD5 is now considered vulnerable and should only be used when stronger authentication is not available. SHA authentication is recommended using key chains with 'cryptographic-algorithm' command. Enable per-interface with 'ip ospf authentication key-chain' or globally with 'area area-id authentication message-digest'."
            },
            {
              type: "fill",
              question: "Use the ______ ______ command to configure syslog to send messages to a remote server.",
              answer: "logging host",
              explanation: "Configure syslog with: (1) 'logging host' to set the destination; (2) 'logging trap' to set severity level; (3) 'logging source-interface' to set source interface; (4) 'logging on' to enable logging to all destinations. Use 'service timestamps log datetime' to add timestamps to messages."
            }
          ]
        },
        {
          id: 7,
          title: "Module 7: Authentication, Authorization, and Accounting (AAA)",
          objective: "Configure AAA to secure a network.",
          questions: [
            {
              type: "mcq",
              question: "What does AAA stand for?",
              options: [
                "Access, Authentication, Administration",
                "Authentication, Authorization, Accounting",
                "Automated Access Administration",
                "Advanced Access Architecture"
              ],
              answer: 1,
              explanation: "AAA stands for Authentication, Authorization, and Accounting. (1) Authentication - users must prove their identity; (2) Authorization - determines which resources the user can access and what operations they can perform; (3) Accounting - records what the user does, including what is accessed, time spent, and changes made."
            },
            {
              type: "mcq",
              question: "What are the two methods of implementing AAA services?",
              options: [
                "Local AAA and Server-based AAA",
                "Inline AAA and Offline AAA",
                "Manual AAA and Automatic AAA",
                "Internal AAA and External AAA"
              ],
              answer: 0,
              explanation: "Two common methods: (1) Local AAA Authentication - uses a local database for authentication (self-contained), suitable for smaller networks; (2) Server-Based AAA Authentication - the router accesses a central AAA server (like Cisco Secure ACS or ISE) using RADIUS or TACACS+ protocols, suitable for larger networks."
            },
            {
              type: "mcq",
              question: "What are the two protocols used for server-based AAA communication?",
              options: [
                "HTTP and HTTPS",
                "RADIUS and TACACS+",
                "SNMP and Syslog",
                "SSH and Telnet"
              ],
              answer: 1,
              explanation: "TACACS+ and RADIUS are both authentication protocols used to communicate with AAA servers. TACACS+ is a Cisco enhancement that provides separate AAA services (can use TACACS+ for authorization while using another method for authentication). RADIUS is an open IETF standard that combines authentication and authorization as one process."
            },
            {
              type: "mcq",
              question: "What is a key difference between TACACS+ and RADIUS?",
              options: [
                "TACACS+ uses UDP; RADIUS uses TCP",
                "TACACS+ separates AAA services; RADIUS combines authentication and authorization",
                "TACACS+ is an open standard; RADIUS is Cisco-proprietary",
                "TACACS+ is faster than RADIUS"
              ],
              answer: 1,
              explanation: "Key differences: (1) TACACS+ separates AAA services (can use it for authorization while using another method for authentication), while RADIUS combines authentication and authorization as one process; (2) TACACS+ uses TCP (port 49), RADIUS uses UDP (ports 1812/1813); (3) TACACS+ encrypts the entire packet body, RADIUS only encrypts the password; (4) TACACS+ is Cisco-proprietary, RADIUS is an open IETF standard."
            },
            {
              type: "mcq",
              question: "What is Cisco ISE?",
              options: [
                "A type of firewall",
                "An identity and access control policy platform",
                "A network monitoring tool",
                "A routing protocol"
              ],
              answer: 1,
              explanation: "Cisco Identity Services Engine (ISE) is an identity and access control policy platform that enables enterprises to enforce compliance, enhance infrastructure security, and streamline service operations. ISE combines policy definition, control, and reporting in one appliance. Features include Asset Visibility, Posture assessment, Segmentation, Guest management, and Threat Containment."
            },
            {
              type: "fill",
              question: "To globally enable AAA on a Cisco device, use the ______ command.",
              answer: "aaa new-model",
              explanation: "The 'aaa new-model' command globally enables AAA on the device. This is a prerequisite for all other AAA commands. After enabling AAA, configure authentication method lists with 'aaa authentication login', authorization with 'aaa authorization', and accounting with 'aaa accounting'."
            },
            {
              type: "fill",
              question: "______ combines authentication and authorization as one process, while ______ separates them.",
              answer: "RADIUS TACACS+",
              explanation: "RADIUS combines authentication and authorization as one process, meaning when a user is authenticated, they are also authorized in the same transaction. TACACS+ separates AAA services, allowing you to use TACACS+ for authorization while using a different method for authentication. This gives TACACS+ more flexibility."
            },
            {
              type: "fill",
              question: "The ______ ______ command secures AAA user accounts by locking out accounts that have excessive failed attempts.",
              answer: "aaa local authentication attempts max-fail",
              explanation: "The 'aaa local authentication attempts max-fail' command secures AAA user accounts by locking out accounts with excessive failed login attempts. The locked out user account remains locked until manually cleared by an administrator using 'clear aaa local user lockout' in privileged EXEC mode."
            }
          ]
        }
      ]
    },
    {
      week: 4,
      title: "Week 4",
      modules: [
        {
          id: 8,
          title: "Module 8: Access Control Lists",
          objective: "Implement ACLs to filter traffic and mitigate network attacks.",
          questions: [
            {
              type: "mcq",
              question: "What is an ACL?",
              options: [
                "A series of IOS commands used to filter packets based on packet header information",
                "A type of routing protocol",
                "A hardware component in switches",
                "A method for encrypting network traffic"
              ],
              answer: 0,
              explanation: "An ACL (Access Control List) is a series of IOS commands used to filter packets based on information found in the packet header. Packet filtering controls access to a network by analyzing incoming and/or outgoing packets and forwarding or discarding them based on given criteria. Filtering can occur at Layer 3 or Layer 4."
            },
            {
              type: "mcq",
              question: "Where should standard ACLs be placed?",
              options: [
                "As close to the source as possible",
                "As close to the destination as possible",
                "In the middle of the network",
                "On the edge router only"
              ],
              answer: 1,
              explanation: "Standard ACLs should be placed as close to the destination as possible. This is because standard ACLs only filter based on source address. Placing them near the source could inadvertently filter traffic that should be allowed to reach other destinations. Extended ACLs should be placed as close to the source as possible to prevent unwanted traffic from traversing the network."
            },
            {
              type: "mcq",
              question: "Where should extended ACLs be placed?",
              options: [
                "As close to the source as possible",
                "As close to the destination as possible",
                "On the DMZ only",
                "On internal switches only"
              ],
              answer: 0,
              explanation: "Extended ACLs should be placed as close to the source as possible. This prevents unwanted traffic from being sent across multiple networks only to be denied at the destination. Extended ACLs can filter on source, destination, protocol, and port numbers, making them more precise for source-based filtering."
            },
            {
              type: "mcq",
              question: "What does the TCP 'established' keyword do in an extended ACL?",
              options: [
                "Establishes a new TCP connection",
                "Permits return traffic for connections initiated from inside, while denying outside-initiated traffic",
                "Resets all TCP connections",
                "Encrypts TCP traffic"
              ],
              answer: 1,
              explanation: "The TCP 'established' keyword enables basic stateful firewall services. It allows inside traffic to exit the private network and permits returning reply traffic to enter, while denying TCP traffic generated by an outside host attempting to communicate with an inside host. It can be used to permit only return HTTP traffic from requested websites while denying all other traffic."
            },
            {
              type: "mcq",
              question: "Which ACL number range is used for standard ACLs?",
              options: [
                "1-99 and 1300-1999",
                "100-199 and 2000-2699",
                "1-99 only",
                "100-199 only"
              ],
              answer: 0,
              explanation: "Standard ACLs use numbers 1-99 or 1300-1999. Extended ACLs use numbers 100-199 or 2000-2699. Named ACLs are the preferred method as they provide information about the purpose of the ACL. Use 'ip access-list' global configuration command to create a named ACL."
            },
            {
              type: "mcq",
              question: "How do you calculate a wildcard mask?",
              options: [
                "Add the subnet mask to 255.255.255.255",
                "Subtract the subnet mask from 255.255.255.255",
                "Multiply the subnet mask by 2",
                "Divide 255 by the number of hosts"
              ],
              answer: 1,
              explanation: "To calculate a wildcard mask, subtract the subnet mask from 255.255.255.255. For example, for a /24 subnet (255.255.255.0): 255.255.255.255 - 255.255.255.0 = 0.0.0.255. Unlike a subnet mask where binary 1 = match, in a wildcard mask binary 0 = match and binary 1 = ignore."
            },
            {
              type: "fill",
              question: "The ______ keyword substitutes for the 0.0.0.0 wildcard mask, matching a single host address.",
              answer: "host",
              explanation: "The 'host' keyword substitutes for the 0.0.0.0 wildcard mask, meaning all IPv4 address bits must match to filter just one host address. The 'any' keyword substitutes for the 255.255.255.255 mask, meaning ignore the entire IPv4 address or accept any addresses. These keywords reduce ACL keystrokes and improve readability."
            },
            {
              type: "fill",
              question: "The ______ keyword substitutes for the 255.255.255.255 wildcard mask, meaning accept any addresses.",
              answer: "any",
              explanation: "The 'any' keyword substitutes for the 255.255.255.255 wildcard mask, meaning to ignore the entire IPv4 address or accept any addresses. The 'host' keyword substitutes for 0.0.0.0, matching a single host. These keywords simplify ACL configuration and make it easier to read."
            },
            {
              type: "fill",
              question: "ACLs are processed ______-down, meaning as soon as a statement is matched, the ACL is exited.",
              answer: "top",
              explanation: "ACLs are processed top-down. This means: (1) Statement order is important; (2) As soon as a statement is matched, the ACL is exited; (3) The most specific statements should be at the top; (4) The last statement is an implicit deny any; (5) Only one ACL is allowed per interface, per protocol, per direction."
            },
            {
              type: "mcq",
              question: "What is an implicit rule in every IPv6 ACL?",
              options: [
                "Permit all IPv6 traffic",
                "Deny ipv6 any (implicit deny) and permit NDP neighbor discovery",
                "Deny all TCP traffic",
                "Permit ICMP echo requests only"
              ],
              answer: 1,
              explanation: "Every IPv6 ACL contains an implicit 'deny ipv6 any' command at the end. IPv6 ACLs also contain implicit permit rules to enable IPv6 neighbor discovery (NDP). NDP requires neighbor advertisements (NAs) and neighbor solicitations (NSs). If you configure 'deny ipv6 any' without permitting neighbor discovery, NDP will be disabled."
            },
            {
              type: "mcq",
              question: "Which command applies an IPv6 ACL to an interface?",
              options: [
                "ip access-group name in",
                "ipv6 traffic-filter name in",
                "access-list apply name",
                "ipv6 access-group name in"
              ],
              answer: 1,
              explanation: "Use 'ipv6 traffic-filter name in|out' to apply an IPv6 ACL to an interface. IPv6 ACLs are configured with 'ipv6 access-list name' command. All IPv6 ACLs must be named (no numbered IPv6 ACLs). They support filtering based on source/destination addresses, option headers, and upper-layer protocol info."
            },
            {
              type: "mcq",
              question: "Which IP addresses should never be source IP addresses for traffic entering an organization's network from the internet?",
              options: [
                "Only private IP addresses",
                "All zeros, broadcast, local host (127.0.0.0/8), APIPA (169.254.0.0/16), RFC 1918 private, and IP multicast",
                "Only multicast addresses",
                "Only broadcast addresses"
              ],
              answer: 1,
              explanation: "To mitigate spoofing attacks, the internet-facing interface should never accept inbound packets from: all zeros addresses, broadcast addresses, local host (127.0.0.0/8), APIPA (169.254.0.0/16), reserved private addresses (RFC 1918), and IP multicast range (224.0.0.0/4). These should all be blocked by ACLs."
            },
            {
              type: "mcq",
              question: "Which ICMP messages should be allowed INTO the internal network for proper operation?",
              options: [
                "Echo request, redirect, and timestamp",
                "Echo reply, source quench, and unreachable",
                "All ICMP messages should be blocked",
                "Only echo requests should be allowed"
              ],
              answer: 1,
              explanation: "ICMP echo and redirect messages should be blocked inbound. However, these ICMP messages should be allowed inbound: (1) Echo reply - allows users to ping external hosts; (2) Source quench - requests sender to decrease traffic rate; (3) Unreachable - generated for packets denied by ACL. Block all other ICMP types inbound."
            },
            {
              type: "mcq",
              question: "What are the two methods to modify an ACL?",
              options: [
                "Delete and recreate, or reload the router",
                "Use a text editor, or use sequence numbers",
                "Use TFTP or FTP",
                "Use SNMP or SSH"
              ],
              answer: 1,
              explanation: "Two methods to modify an ACL: (1) Text Editor Method - copy the ACL to a text editor, make changes, remove the old ACL from the router, then paste the edited ACL back; (2) Sequence Number Method - use 'ip access-list' to edit, delete a specific ACE with 'no sequence-number', then add the new ACE with the desired sequence number."
            }
          ]
        },
        {
          id: 9,
          title: "Module 9: Firewall Technologies",
          objective: "Explain how firewalls are implemented to provide network security.",
          questions: [
            {
              type: "mcq",
              question: "What are the common properties shared by all firewalls?",
              options: [
                "They encrypt all traffic, use VPNs, and block all incoming traffic",
                "They are resistant to attacks, are the only transit point, and enforce access control policy",
                "They use ACLs, support SSH, and monitor syslog",
                "They filter Layer 7, use state tables, and support IPS"
              ],
              answer: 1,
              explanation: "All firewalls share common properties: (1) Firewalls are resistant to network attacks; (2) Firewalls are the only transit point between internal corporate networks and external networks because all traffic flows through the firewall; (3) Firewalls enforce the access control policy."
            },
            {
              type: "mcq",
              question: "Which type of firewall uses a state table to track connections?",
              options: [
                "Packet filtering firewall",
                "Stateful firewall",
                "Application gateway firewall",
                "Next-generation firewall"
              ],
              answer: 1,
              explanation: "Stateful firewalls are the most versatile and common firewall technology. They provide stateful packet filtering by using connection information maintained in a state table. Stateful filtering is a firewall architecture at the network layer that tracks the state of network connections."
            },
            {
              type: "mcq",
              question: "At which layers do Application Gateway (Proxy) firewalls filter information?",
              options: [
                "Layers 3 and 4",
                "Layers 3, 4, 5, and 7",
                "Layer 2 only",
                "Layer 7 only"
              ],
              answer: 1,
              explanation: "Application Gateway (Proxy) firewalls filter information at Layers 3, 4, 5, and 7. Most of the firewall control and filtering is done in software. When a client needs to access a remote server, it connects to a proxy server which then makes the connection to the remote server on behalf of the client."
            },
            {
              type: "mcq",
              question: "What additional services do Next-Generation firewalls provide beyond stateful firewalls?",
              options: [
                "Integrated intrusion prevention, application awareness, and techniques to address evolving threats",
                "Email filtering and web caching only",
                "VPN and NAT capabilities",
                "Load balancing and traffic shaping"
              ],
              answer: 0,
              explanation: "Next-Generation firewalls go beyond stateful firewalls by providing: (1) Integrated intrusion prevention; (2) Application awareness and control; (3) Upgrade paths to include future information feeds; (4) Techniques to address evolving security threats. They represent the latest evolution in firewall technology."
            },
            {
              type: "mcq",
              question: "What is a DMZ in firewall design?",
              options: [
                "A zone where all traffic is encrypted",
                "A firewall design with inside, outside, and DMZ interfaces for public-facing servers",
                "A type of VPN tunnel",
                "A method for load balancing traffic"
              ],
              answer: 1,
              explanation: "A DMZ (Demilitarized Zone) is a firewall design where there is typically one inside interface connected to the private network, one outside interface connected to the public network, and one DMZ interface. The DMZ is used for servers that must be accessible from the internet while strictly blocking access to the inside network."
            },
            {
              type: "fill",
              question: "______ firewalls permit or deny traffic based on Layer 3 and Layer 4 information and are stateless.",
              answer: "Packet filtering",
              explanation: "Packet filtering (stateless) firewalls permit or deny traffic based on Layer 3 and Layer 4 information. They use a simple policy table look-up. Benefits include low impact on performance and easy implementation. Limitations include susceptibility to IP spoofing, inability to filter fragmented packets reliably, and inability to dynamically filter certain services."
            },
            {
              type: "fill",
              question: "A ______ defense uses different types of firewalls combined in layers to add depth to security.",
              answer: "layered",
              explanation: "A layered defense combines different types of firewalls in layers. Four layers include: (1) Network Core security - protects against malicious software and traffic anomalies; (2) Perimeter security - secures boundaries between zones; (3) Communications security - provides information assurance; (4) Endpoint security - provides identity and device security."
            },
            {
              type: "mcq",
              question: "What is a limitation of stateful firewalls?",
              options: [
                "They cannot track UDP connections",
                "They cannot prevent application-layer attacks and lack application awareness",
                "They are slower than packet filtering firewalls",
                "They do not support TCP connections"
              ],
              answer: 1,
              explanation: "Limitations of stateful firewalls include: (1) Cannot prevent application-layer attacks; (2) Lack application awareness; (3) Some stateful firewalls do not support user authentication; (4) Not all protocols have state (e.g., UDP); (5) They can be complex to configure and maintain. Despite these limitations, they are the most versatile and common firewall technology."
            },
            {
              type: "mcq",
              question: "What are three common firewall designs?",
              options: [
                "Inline, Out-of-band, and Hybrid",
                "Private and Public, DMZ, and Zone-Based Policy",
                "Internal, External, and Perimeter",
                "Hardware, Software, and Cloud"
              ],
              answer: 1,
              explanation: "Three common firewall designs: (1) Private and Public - the public network is untrusted, the private network is trusted, determined by two interfaces; (2) DMZ - includes inside, outside, and DMZ interfaces for public-facing servers; (3) Zone-Based Policy - uses zones (groups of interfaces with similar functions) to apply firewall rules."
            }
          ]
        },
        {
          id: 10,
          title: "Module 10: Zone-Based Policy Firewalls",
          objective: "Implement Zone-Based Policy Firewall using CLI.",
          questions: [
            {
              type: "mcq",
              question: "What are the three ZPF actions that can be configured?",
              options: [
                "Allow, Block, Log",
                "Inspect, Drop, Pass",
                "Permit, Deny, Reset",
                "Accept, Reject, Alert"
              ],
              answer: 1,
              explanation: "Three ZPF actions: (1) Inspect - performs Cisco IOS stateful packet inspection; (2) Drop - analogous to a deny statement in an ACL, with optional logging; (3) Pass - analogous to a permit statement in an ACL, but does not track the state of connections or sessions."
            },
            {
              type: "mcq",
              question: "What is the 'self zone' in ZPF?",
              options: [
                "A zone with the highest security level",
                "The router itself, including all IP addresses assigned to router interfaces",
                "A zone for management traffic only",
                "A zone that blocks all traffic by default"
              ],
              answer: 1,
              explanation: "The self zone is the router itself and includes all IP addresses assigned to the router interfaces. This is traffic that originates at the router or is addressed to a router interface. The rules depend on whether the router is the source or the destination of the traffic."
            },
            {
              type: "mcq",
              question: "How many steps are involved in configuring a ZPF?",
              options: ["3 steps", "4 steps", "5 steps", "6 steps"],
              answer: 2,
              explanation: "Five steps to configure a ZPF: (1) Create the zones; (2) Identify traffic with a class-map; (3) Define an action with a policy-map; (4) Identify a zone pair and match it to a policy-map; (5) Assign zones to the appropriate interfaces."
            },
            {
              type: "mcq",
              question: "What is the default inter-zone policy in ZPF?",
              options: [
                "Permit all traffic",
                "Drop all traffic unless specifically allowed",
                "Inspect all traffic",
                "Log all traffic"
              ],
              answer: 1,
              explanation: "The default inter-zone policy is to drop all traffic unless otherwise specifically allowed by the service-policy configured for the zone-pair. The router security posture is to block unless explicitly allowed. This is a key benefit of ZPF over the Classic Firewall model."
            },
            {
              type: "mcq",
              question: "Which of the following is a benefit of ZPF over Classic Firewall?",
              options: [
                "ZPF is dependent on ACLs",
                "ZPF is not dependent on ACLs and policies are easy to read with C3PL",
                "ZPF requires less memory",
                "ZPF only works on physical interfaces"
              ],
              answer: 1,
              explanation: "Benefits of ZPF include: (1) Not dependent on ACLs; (2) Router security posture is to block unless explicitly allowed; (3) Policies are easy to read and troubleshoot with Cisco Common Classification Policy Language (C3PL); (4) Virtual and physical interfaces can be grouped into zones; (5) Policies are applied to unidirectional traffic between zones."
            },
            {
              type: "fill",
              question: "The ______ action in ZPF performs Cisco IOS stateful packet inspection.",
              answer: "Inspect",
              explanation: "The 'Inspect' action performs Cisco IOS stateful packet inspection. The 'Drop' action is analogous to a deny statement in an ACL with an optional log feature. The 'Pass' action is analogous to a permit statement but does not track the state of connections or sessions."
            },
            {
              type: "fill",
              question: "Use the ______ ______ command to create a zone in ZPF configuration.",
              answer: "zone security",
              explanation: "Use the 'zone security' command to create zones. Then use 'class-map' to identify traffic, 'policy-map' to define actions, 'zone-pair security' to identify a zone pair and match it to a policy-map, and 'zone-member security' to assign zones to interfaces."
            }
          ]
        }
      ]
    },
    {
      week: 5,
      title: "Week 5",
      modules: [
        {
          id: 11,
          title: "Module 11: IPS Technologies",
          objective: "Explain how network-based Intrusion Prevention Systems are used to help secure a network.",
          questions: [
            {
              type: "mcq",
              question: "What is a zero-day attack?",
              options: [
                "An attack that occurs on the first day of the month",
                "A cyberattack that exploits software vulnerabilities unknown or undisclosed by the vendor",
                "An attack that lasts for zero days",
                "An attack that uses zero bandwidth"
              ],
              answer: 1,
              explanation: "A zero-day attack is a cyberattack that tries to exploit software vulnerabilities that are unknown or undisclosed by the software vendor. The term 'zero-day' describes the moment when a previously unknown threat is identified. There is zero days of protection available because the vulnerability was unknown."
            },
            {
              type: "mcq",
              question: "What is the key difference between IDS and IPS?",
              options: [
                "IDS is hardware; IPS is software",
                "IDS passively monitors traffic; IPS works inline to prevent attacks",
                "IDS is faster than IPS",
                "IDS uses signatures; IPS uses heuristics"
              ],
              answer: 1,
              explanation: "IDS (Intrusion Detection System) passively monitors traffic by copying the traffic stream and analyzing it. It detects but does not prevent attacks. IPS (Intrusion Prevention System) works inline, immediately detecting and stopping attacks. IPS can add latency but provides active prevention. IDS is useful for monitoring without impacting network performance."
            },
            {
              type: "mcq",
              question: "What are the two primary types of IPS?",
              options: [
                "Network-based and Cloud-based",
                "Host-based (HIPS) and Network-based",
                "Software-based and Hardware-based",
                "Active and Passive"
              ],
              answer: 1,
              explanation: "Two primary kinds of IPS: (1) Host-based IPS (HIPS) - combination of antivirus, antimalware, and firewall installed on hosts (e.g., Windows Defender); (2) Network-based IPS - implemented on dedicated or non-dedicated devices like routers, Cisco Firepower, ASA, or ISR. Both should be integrated for robust security."
            },
            {
              type: "mcq",
              question: "What does SPAN stand for?",
              options: [
                "Security Protocol for Area Networks",
                "Switch Port Analyzer",
                "System Packet Analysis Network",
                "Secure Port Access Node"
              ],
              answer: 1,
              explanation: "SPAN (Switch Port Analyzer) is a technology that enables network monitoring from source ports or VLANs to a destination port connected to monitoring devices. Port mirroring enables the switch to copy frames received on one or more ports to a SPAN port connected to an analysis device. Configure with 'monitor session' command."
            },
            {
              type: "mcq",
              question: "What are the two modes of deployment for IDS/IPS sensors?",
              options: [
                "Active mode and Passive mode",
                "Inline mode and Promiscuous mode",
                "Internal mode and External mode",
                "Fast mode and Slow mode"
              ],
              answer: 1,
              explanation: "IDS and IPS sensors can operate in two modes: (1) Inline mode (inline interface pair mode) - the sensor is placed directly in the traffic path and can prevent attacks in real-time; (2) Promiscuous mode (passive mode) - the sensor monitors a copy of the traffic, functioning as IDS, alerting and logging but not preventing attacks."
            },
            {
              type: "mcq",
              question: "What is Snort IPS?",
              options: [
                "A Cisco proprietary IPS system",
                "An open source network IPS used on Cisco 4000 Series ISRs",
                "A type of firewall rule",
                "A network monitoring protocol"
              ],
              answer: 1,
              explanation: "Snort is an open source network IPS that performs real-time traffic analysis and generates alerts when threats are detected. It runs in a virtual service container on Cisco 4000 Series ISRs. Snort can be enabled in IDS mode (reports alerts but doesn't prevent) or IPS mode (takes actions to prevent attacks). Signatures are delivered automatically by Cisco Talos."
            },
            {
              type: "fill",
              question: "In ______ mode, a NIPS functions as IDS by monitoring mirrored traffic, alerting personnel and logging information when attacks occur.",
              answer: "promiscuous",
              explanation: "In promiscuous mode (passive mode), a NIPS functions as IDS by monitoring mirrored traffic. It alerts personnel and logs information when attacks occur but does not actively prevent them. In inline mode, the NIPS processes all traffic that enters a network and checks that traffic at Layers 3 to 7, actively preventing attacks."
            },
            {
              type: "fill",
              question: "Snort rule sets are term-based subscriptions available in two types: ______ Rule Set and ______ Rule Set.",
              answer: "Community Subscriber",
              explanation: "Two types of Snort rule sets: (1) Community Rule Set - offers limited coverage with 30-day delayed access to updated signatures, no Cisco support; (2) Subscriber Rule Set - offers the best protection with fastest access to updated signatures using Cisco Talos research, fully supported by Cisco. A SEC license is required."
            },
            {
              type: "fill",
              question: "A network ______ is a passive splitting device implemented inline that forwards all traffic to an analysis device.",
              answer: "tap",
              explanation: "A network tap (test access point) is a passive splitting device implemented inline between a device of interest and the network. It forwards all traffic, including physical layer errors, to an analysis device while allowing traffic to reach its destination. Taps are typically fail-safe - if a tap fails, traffic is not affected."
            }
          ]
        },
        {
          id: 12,
          title: "Module 12: IPS Operation and Implementation",
          objective: "Explain how signatures are used to detect malicious network traffic.",
          questions: [
            {
              type: "mcq",
              question: "What are the three distinctive attributes of IPS signatures?",
              options: [
                "Source, destination, and protocol",
                "Type, trigger, and action",
                "Pattern, anomaly, and policy",
                "Atomic, composite, and stateful"
              ],
              answer: 1,
              explanation: "Signatures have three distinctive attributes: (1) Type - Atomic or Composite; (2) Trigger - also called the alarm, this is what causes the signature to fire; (3) Action - what the IPS will do when the signature is triggered. IPS sensors examine data flows using many different signatures to detect known attacks."
            },
            {
              type: "mcq",
              question: "What is the difference between an atomic signature and a composite signature?",
              options: [
                "Atomic signatures are smaller; composite signatures are larger",
                "Atomic signatures need only one packet; composite signatures require multiple packets and state information",
                "Atomic signatures are faster; composite signatures are more accurate",
                "Atomic signatures are for IPv4; composite signatures are for IPv6"
              ],
              answer: 1,
              explanation: "Atomic Signature: a single packet, activity, or event identifies an attack. The IPS does not need to maintain state information and traffic analysis can be performed very quickly and efficiently. Composite Signature: also called a stateful signature because the IPS requires several pieces of data to match an attack signature. The IPS must maintain state information called the event horizon."
            },
            {
              type: "mcq",
              question: "What is a false positive in IPS terminology?",
              options: [
                "The IPS correctly detects an attack",
                "The IPS generates an alarm for normal user traffic that should not have triggered an alarm",
                "The IPS fails to detect a known attack",
                "The IPS blocks legitimate traffic intentionally"
              ],
              answer: 1,
              explanation: "False positive (Undesirable): the IPS generates an alarm after processing normal user traffic that should not have triggered an alarm. The IPS must be tuned to change these to true negatives. False positives are costly because they must be investigated. Benign activity that results in a false positive is sometimes called a benign trigger."
            },
            {
              type: "mcq",
              question: "What is a false negative in IPS terminology?",
              options: [
                "The IPS generates an alarm for normal traffic",
                "The IPS correctly identifies an attack",
                "The IPS fails to generate an alarm and known attacks are not being detected",
                "The IPS blocks all traffic"
              ],
              answer: 2,
              explanation: "False negative (Dangerous): the IPS fails to generate an alarm and known attacks are not being detected. This means exploits are not being detected by the security systems in place. These incidents could go undetected for a long time, and ongoing data loss and damage could result. The goal is to tune the IPS to generate true positive alarms instead."
            },
            {
              type: "mcq",
              question: "What are the four IPS signature trigger categories?",
              options: [
                "Atomic, composite, stateful, and hybrid",
                "Pattern-based, anomaly-based, policy-based, and honey pot-based detection",
                "Active, passive, inline, and promiscuous",
                "Network, host, wireless, and application"
              ],
              answer: 1,
              explanation: "Four general IPS signature trigger categories: (1) Pattern-based detection (signature-based) - looks for specific patterns; (2) Anomaly-based detection - looks for deviations from normal traffic patterns; (3) Policy-based detection - looks for violations of security policies; (4) Honey pot-based detection - uses decoy systems to attract and detect attacks."
            },
            {
              type: "mcq",
              question: "What are the three options available to provide intrusion prevention services?",
              options: [
                "Firewall, ACL, and VPN",
                "Cisco Firepower NGIPS, Cisco Snort IPS, and External Snort IPS Server",
                "IDS, IPS, and Firewall",
                "HIPS, NIPS, and WIPS"
              ],
              answer: 1,
              explanation: "Three options: (1) Cisco Firepower Next-Generation IPS (NGIPS) - dedicated in-line threat prevention appliances; (2) Cisco Snort IPS - IPS service enabled on ISR 4000 series routers; (3) External Snort IPS Server - similar to Cisco Snort IPS but requires a promiscuous (SPAN) port and an external Snort IDS/IPS server."
            },
            {
              type: "mcq",
              question: "What are the three Snort IPS security policies provided by Cisco Talos, in order from least to most protection?",
              options: [
                "Security, balanced, connectivity",
                "Connectivity, balanced, security",
                "Basic, standard, advanced",
                "Low, medium, high"
              ],
              answer: 1,
              explanation: "Three Snort IPS policies: (1) Connectivity - least protection, prioritizes connectivity over security (~1,000 rules); (2) Balanced - default policy, recommended for initial deployments, balances security and performance (~8,000 rules); (3) Security - most protection, for organizations exceptionally concerned about security, lower bandwidth but higher security requirements (~12,000 rules)."
            },
            {
              type: "mcq",
              question: "What command configures the UTD (United Threat Defense) standard engine?",
              options: [
                "snort engine standard",
                "utd engine standard",
                "ips engine standard",
                "threat engine standard"
              ],
              answer: 1,
              explanation: "The 'utd engine standard' command configures the United Threat Defense (UTD) standard engine and enters UTD standard engine configuration mode. Use 'threat-inspection' to configure threat inspection: 'threat protection' for IPS mode or 'threat detection' for IDS mode. Use 'logging host' and 'logging syslog' for logging."
            },
            {
              type: "fill",
              question: "A ______ ______ is also called a stateful signature because the IPS requires several pieces of data to match an attack signature.",
              answer: "composite signature",
              explanation: "A composite signature is also called a stateful signature because the IPS requires several pieces of data to match an attack signature. The IPS must maintain state information which is referred to as the event horizon. The length of an event horizon varies from one signature to the next. Atomic signatures, by contrast, need only a single packet."
            },
            {
              type: "fill",
              question: "A ______ ______ occurs when the IPS generates an alarm because it correctly detected known attack traffic.",
              answer: "true positive",
              explanation: "True positive (Desirable): the IPS generates an alarm because it detected known attack traffic. The alert has been verified to be an actual security incident and indicates the IPS rule worked correctly. True negative (also desirable): normal network traffic does not generate an alarm because the traffic is clear of threats."
            },
            {
              type: "fill",
              question: "Snort IPS uses two VirtualPortGroup interfaces: VPG0 for ______ traffic and VPG1 for ______ traffic.",
              answer: "management user",
              explanation: "VPG0 is for management traffic to exchange information with IPS servers (signature updates, external log server). It requires a routable IP address. VPG1 is for user traffic that should be inspected. It should not be routable and uses a non-routable private IP address. User traffic is forwarded to the Snort engine via VPG1, inspected, then either rejected or forwarded back."
            },
            {
              type: "fill",
              question: "An ______ ______ is a file that contains a compressed, installable version of a virtual machine, used to deploy Snort IPS.",
              answer: "OVA file",
              explanation: "An Open Virtualization Archive (OVA) is a file that contains a compressed, installable version of a virtual machine. The service OVA file is not bundled with Cisco IOS XE Release images. Although OVA files may be preinstalled in flash, it is recommended to download the latest from Cisco.com. Install with 'virtual-service install name package file-url media file-system'."
            }
          ]
        }
      ]
    }
  ]
};
